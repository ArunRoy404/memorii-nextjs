import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

const handler = NextAuth({
    providers: [
        CredentialsProvider({
            id: "credentials",
            name: "Credentials",
            credentials: {
                email: { label: "Email", type: "email" },
                password: { label: "Password", type: "password" },
                rememberMe: { label: "Remember Me", type: "checkbox" },
            },
            async authorize(credentials) {
                if (!credentials?.email || !credentials?.password) {
                    return null;
                }

                try {
                    const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/login`, {
                        method: "POST",
                        body: JSON.stringify({
                            email: credentials.email,
                            password: credentials.password,
                        }),
                        headers: { "Content-Type": "application/json" },
                    });


                    const data = await response.json();

                    if (response.ok && data.success) {
                        return {
                            ...data.data.user,
                            token: data.data.token,
                            rememberMe: credentials.rememberMe === 'true',
                        };
                    }
                    return null;
                } catch (error) {
                    return null;
                }
            },
        }),
        CredentialsProvider({
            id: "registration",
            name: "Registration",
            credentials: {
                name: { label: "Name", type: "text" },
                email: { label: "Email", type: "email" },
                password: { label: "Password", type: "password" },
                password_confirmation: { label: "Confirm Password", type: "password" },
            },
            async authorize(credentials) {
                try {
                    const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/register`, {
                        method: "POST",
                        body: JSON.stringify({
                            name: credentials.name,
                            email: credentials.email,
                            password: credentials.password,
                            password_confirmation: credentials.password_confirmation,
                        }),
                        headers: {
                            "Content-Type": "application/json",
                            "Accept": "application/json"
                        },
                    });

                    const data = await response.json();

                    if (response.ok && data.success) {
                        return {
                            ...data.data.user,
                            token: data.data.token,
                        };
                    }

                    if (data.errors) {
                        throw new Error(JSON.stringify(data.errors));
                    }

                    throw new Error("Registration failed");
                } catch (error) {
                    throw new Error(error.message);
                }
            },
        }),
    ],
    session: {
        strategy: "jwt",
        maxAge: 30 * 24 * 60 * 60,
    },
    callbacks: {
        async jwt({ token, user }) {
            if (user) {
                token.token = user.token;
                token.user = user;

                const oneDay = 24 * 60 * 60;
                const thirtyDays = 30 * oneDay;
                token.expires = Math.floor(Date.now() / 1000) + (user.rememberMe ? thirtyDays : oneDay);
            }
            return token;
        },
        async session({ session, token }) {
            session.token = token.token;
            session.user = token.user;
            return session;
        },
    },
    pages: {
        signIn: "/login",
    },
    secret: process.env.NEXTAUTH_SECRET,
});

export { handler as GET, handler as POST };


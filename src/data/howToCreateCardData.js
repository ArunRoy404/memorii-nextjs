import ColorfulText from "@/components/ui/ColorfulText";

const { default: Book } = require("@/components/svg/Book");
const { default: Card } = require("@/components/svg/Card");
const { default: Hand } = require("@/components/svg/Hand");
const { default: Letter } = require("@/components/svg/Letter");
const { default: LinkIcon } = require("@/components/svg/LinkIcon");
const { default: Peoples } = require("@/components/svg/Peoples");

const howToCreateCardData = [
    {
        category: 'e-card',
        title: <>How to Create an <ColorfulText>e-Card</ColorfulText></>,
        description: "Collect many messages in one digital card — it’s quick, fun, and private",
        steps: [
            {
                id: 'step-1',
                step: 'Pick your template and write the first message',
                icon: Card,
            },
            {
                id: 'step-2',
                step: 'Decide how many people you want to sign',
                icon: Peoples,
            },
            {
                id: 'step-3',
                step: 'Share a private link or QR code to collect messages',
                icon: LinkIcon,
            },
            {
                id: 'step-4',
                step: 'Review all messages and send to the receiver',
                icon: Letter,
            },
        ],
    },
    {
        category: 'e-memory',
        title: <>How to Create an <ColorfulText>e-Memory</ColorfulText>book</>,
        description: "Collect many messages in one digital card — it’s quick, fun, and private",
        steps: [
            {
                id: 'step-1',
                step: 'Pick your book cover from the templates.',
                icon: Book,
            },
            {
                id: 'step-2',
                step: 'Write a short opening message about the book and choose memory questions or prompts.',
                icon: Hand,
            },
            {
                id: 'step-3',
                step: 'Decide how many people will add their memories, and share a private link or QR code to collect messages.',
                icon: Peoples,
            },
            {
                id: 'step-4',
                step: 'Review and send the completed book.',
                icon: LinkIcon,
            },
        ],
    },
];

export default howToCreateCardData;
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import cardOptionsData from "@/data/cardOptionsData"
import ImageContainerEditor from "@/components/EditorComponents/Editor/ImageContainerEditor"
import EditorTextInsert from "@/components/EditorComponents/Editor/EditorTextInsert"
import StickersContainer from "@/components/EditorComponents/StickersOptions/StickersContainer"
import LayersList from "@/components/EditorComponents/LayersList/LayersList"
import TextOptionsHorizontal from "@/components/EditorComponents/TextOptions/TextOptionsHorizontal"



function EditorDrawerContainer() {
    return (
        <div className="flex w-full flex-col gap-6">
            <Tabs defaultValue="image" className="w-full">
                <TabsList className="grid w-full h-auto p-1"
                    style={{
                        gridTemplateColumns: `repeat(${cardOptionsData.length}, 1fr)`,
                    }}
                >
                    {cardOptionsData.map((item) => (
                        <TabsTrigger
                            key={item.key}
                            value={item.key}
                            className="flex flex-col gap-1 py-2 text-xs"
                        >
                            {item.icon}
                            <span>{item.label}</span>
                        </TabsTrigger>
                    ))}
                </TabsList>

                {/* Individual Content Blocks (No Loop) */}
                <TabsContent value="image">
                    <ImageContainerEditor />
                </TabsContent>

                <TabsContent value="text">
                    <EditorTextInsert isMobile={true} />
                    <TextOptionsHorizontal />
                </TabsContent>

                <TabsContent value="sticker">
                    <StickersContainer />
                </TabsContent>

                <TabsContent value="layers">
                    <LayersList />
                </TabsContent>
            </Tabs>
        </div>
    )
}

export default EditorDrawerContainer
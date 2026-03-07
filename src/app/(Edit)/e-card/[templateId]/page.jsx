import CardEditorPage from '@/templates/editor/CardEditorPage';

const EditTemplate = async ({ params }) => {
    const { templateId } = await params;
    return <CardEditorPage templateId={templateId} />
}
export default EditTemplate;
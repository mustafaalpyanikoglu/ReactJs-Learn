export default function AppSection({ title, sectionId, children, ...props }) {
    return (
        <section id={sectionId}>
            
            <h2>{title}</h2>
            {children}
        </section>
    );
}
export default function Container({ children }) {
    return (
        <div className="relative z-10 max-w-screen-lg xl:max-w-screen-xl mx-auto">{children}</div>
    );
}

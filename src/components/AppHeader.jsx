import MainMenu from "./MainMenu/MainMenu";

export default function AppHeader() {
    return (
        <header>
            <div className="logo">
                <h1>React Kitchen Blog</h1>
            </div>
            <MainMenu />
        </header>
    )
}
import moment from "moment";
import { useThemeCtx } from "./context/themeCtx";
import articles from "./data/data";

function Article({ title, snippet, date }: ArticleProps) {
  return (
    <article className="post">
      <h2>{title}</h2>
      <div className="post-info">
        <span>{moment(date).format("ll")}</span>
      </div>
      <p>{snippet}</p>
    </article>
  );
}

function App() {
  const { theme, toggleTheme } = useThemeCtx() as CtxProps;
  return (
    <main>
      <nav>
        <div className="nav-center">
          <h1>Et Lorem amet officia cupidatat.</h1>

          <button
            className={
              theme === "light-theme"
                ? "button-53 dark-theme"
                : "button-53 light-theme"
            }
            type="button"
            onClick={toggleTheme}
          >
            {theme === "light-theme" ? "🌞" : "🌛"}
          </button>
        </div>
      </nav>
      <section className="articles">
        {articles.map((article) => (
          <Article key={article.id} {...article} />
        ))}
      </section>
    </main>
  );
}

export default App;

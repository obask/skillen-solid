import {For, Show} from "solid-js";

interface Tok {
    original: string
}

interface ArticleProps {
    data: (string | Tok)[]
}

export default function Article(props: ArticleProps) {

    // @ts-ignore
    return <For each={props.data}>{(cat: string | Tok) =>
        <Show when={typeof cat === "string"} fallback={<span>{(cat as Tok).original}</span>}>
            {cat as string}
        </Show>
    }
    </For>
}

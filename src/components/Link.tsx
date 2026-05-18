import * as v from "valibot";

const toSchema = v.pipe(v.string(), v.startsWith("/"))
type To = v.InferOutput<typeof toSchema>

type LinkProps = {
    to: To
    children: React.ReactNode
} 

/**
 * リンクコンポーネント
 * @module Link
 * @param {To} to - 移動先のURLを指定する。
 * @param {React.ReactNode} children - リンクの内容を指定する。
 * @return {JSX.Element} - <a>タグを返す。
 */
export function Link({ to, children }: LinkProps) {
    const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault()
    window.history.pushState({}, "", to)
    window.dispatchEvent(new PopStateEvent("popstate"))
}

return (
        <a href={to} onClick={handleClick}>
            {children}
        </a>
    )
}

export default Link
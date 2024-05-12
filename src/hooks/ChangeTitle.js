import { useEffect } from "react";


export const ChangeTitle = (title) => {
    useEffect(() => {
document.title = `${title} -codeBook`
    } , [title])

  return null ;
}


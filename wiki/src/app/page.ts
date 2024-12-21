export interface Page {
    title: string, 
    headings: Array<string>, 
    content: Array<Array<string>> //content for each heading, include subheadings/extra information formatting
}

export interface PartForm {
    headings: string, 
    content: string, 
    index: number
}
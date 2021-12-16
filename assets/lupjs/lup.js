$(() => {
    $(`[prevent-default="true"]:not(form)`).click((e) => {
        e.preventDefault()
    })
    $(`form[prevent-default="true"]`).submit((e) => {
        e.preventDefault()
    })
})
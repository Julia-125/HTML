document.addEventListener('mousemove', e => {
    Object.assign(document.documentElement, {
        style: `
        --move-x: 0;
        --move-y: 0;
        `
    })
})
$.confirm = function(options) {
    return new Promise((resolve, reject) => {
        const modal = $.modal( {
            title: options.title,
            closable: false,
            content: options.content,
            onClose() {
                modal.destroy()
            },
            width: '400px',
            footerButton: [
                { text: 'Cancel', type: 'secondary', handler() {
                    modal.close()
                    reject()
                    }},
                { text: 'Delete', type: 'danger', handler() {
                    modal.close()
                    resolve()
                    }}
            ]
        })
        setTimeout(()=> modal.open(), 100)
        
    })
}
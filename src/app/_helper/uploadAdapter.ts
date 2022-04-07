class uploadAdapter {
    private loader;
    constructor( loader ) {
        this.loader = loader;
    }

    upload() {
        return this.loader.field.then(file => new Promise((resolve, reject) => {
            
        }))
    }
}
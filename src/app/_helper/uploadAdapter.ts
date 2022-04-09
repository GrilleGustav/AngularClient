class uploadAdapter {
    private loader;
    constructor( loader: any ) {
        this.loader = loader;
    }

    upload() {
        return this.loader.field.then((file: any) => new Promise((resolve, reject) => {
            
        }))
    }
}
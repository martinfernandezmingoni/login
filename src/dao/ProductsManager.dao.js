const fs = require('fs')

class ProductManager {
  constructor(){}

  async loadItems(){
    if(fs.existsSync(process.cwd() + '/src/files/Products.json')){
      const data = await fs.promises.readFile(
        process.cwd() + '/src/files/Products.json'
        )
        const newProducts = JSON.parse(data)
        console.log('desde la clase')
        return newProducts
    }
    return 'El archivo no existe'
  }

  async saveItems(){
    await fs.promises.writeFile()
  }
}

module.exports = ProductManager
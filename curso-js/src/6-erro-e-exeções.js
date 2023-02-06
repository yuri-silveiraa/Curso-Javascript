const main = () => {
  try {
    let divisor = -2
    try {
      if (divisor <0){
        throw new Error("Menor que zero")
      }
        
      if (!isNaN(divisor)) {
        console.log(1 / divisor)
      } else {
        throw new Error('Não é um numero')
      }
    } catch (error) {
      throw new Error(`Divisor: ${divisor}: ${error}`)
    } finally {
        console.log("fim")
    }
     
  } catch (error) {
    console.log(error)
  }
}

module.exports = { main }

class SmartFunc {
  init(xRange, yRange) {
    this.xRange = xRange
    this.yRange = yRange
  }

  func(x) {
    const x1 = this.xRange[0]
    const x2 = this.xRange[1]
    const y1 = this.yRange[0]
    const y2 = this.yRange[1]

    var y = (x - x1) / (x2 - x1) * (y2 - y1) + y1

    return y
  }
}

export default SmartFunc
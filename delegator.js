/**
 * Exposes `Delegator`
 */

class Delegator {

  /**
   * Delegates constructor
   * 
   * @param {Object} delegatedObj 
   * @param {String} target 
   * @api public
   */

  constructor(delegatedObj, target) {
    this.delegatedObj = delegatedObj
    this.target = target;
    this.methods = []
    this.getters = []
    this.setters = []
    this.fluents = []
  }

  /**
   * Delegate method `name`
   * 
   * @param {String} name
   * @return {Delegator} itself
   * @api public
   */

  method(name) {
    var delegatedObj = this.delegatedObj
    var target = this.target
    this.methods.push(name)

    obj[name] = () => {
      return delegatedObj[target][name].apply(delegatedObj[target], arguments)
    }

    return this
  }

  /**
   * Delegate accessor(both getter and setter) `name`
   * 
   * @param {String} name
   * @return {Delegator} itself
   * @api public
   */

  access(name) {
    return this.getter(name).setter(name)
  }

  /**
   * Delegate getter `name`
   * 
   * @param {String} name
   * @return {Delegator} itself
   * @api public
   */

  getter(name) {
    let delegatedObj = this.delegatedObj
    let target = this.target
    this.getters.push(name)
    Object.defineProperty(delegatedObj, name, {
      get:() => {
        return delegatedObj[target][name]
      },
      configurable: true
    })

    return this
  }

  /**
   * Delegate setter `name`
   * 
   * @param {String} name
   * @return {Delegator} itself
   * @api public
   */

  setter(name, value) {
    let delegatedObj = this.delegatedObj
    let target = this.target
    this.setters.push(name)
    Object.defineProperty(delegatedObj, name, {
      set:(val) => {
        return delegatedObj[target][name] = val
      }
    })    

    return this
  }


  /**
   * Delegate fluent `name`
   * 
   * @param {String} name
   * @return {Delegator} itself
   * @api public
   */

  fluent(name) {
    let delegatedObj = this.delegatedObj
    let target = this.target
    this.fluents.push(name)

    delegatedObj[name] = function(val) {
      if(!val) {
        return delegatedObj[target][name]
      } else {
        delegatedObj[target][name] = val
        return this
      }
    }

    return this
  }
}
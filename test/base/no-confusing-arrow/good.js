/**
 * Created by Administrator on 2017/12/24.
 */
/**
 * case 1
 * @param {number} foo param
 * @returns {number} data
 */
const x = foo => (foo === 1 ? 1 : 2)
x(1)
/**
 * case 2
 * @param {number} foo param
 * @returns {number} data
 */
const y = foo => {
  return foo === 1 ? 1 : 2
}
y(2)

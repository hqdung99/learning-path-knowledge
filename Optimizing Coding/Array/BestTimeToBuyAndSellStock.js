// Brute force
const prices = [7, 1, 5, 9, 2, 5, 1];
const prices1 = [1, 2, 3, 4];

function bestTimeToBuyAndSell(prices, index) {
  var maxProfit = 0;
  var max = 0;

  for (let i = index; i < prices.length; i++) {
    for (let j = i + 1; j < prices.length; j++) {
      if (prices[j] > prices[i]) {
        max = bestTimeToBuyAndSell(prices, j + 1) + prices[j] - prices[i];
      }

      if (maxProfit < max) {
        maxProfit = max;
      }
    }
  }

  return maxProfit;
}

// console.log(bestTimeToBuyAndSell(prices, 0));

// Peak Valley Approach
// const prices = [7, 1, 5, 9, 2, 5, 1];

function bestTimeToBuyAndSellPeakValleyApproach(prices) {
  var maxProfit = 0;
  var index = 0;
  var count = 0;

  while (count < prices.length) {
    for (count = index + 1; count < prices.length; count++) {
      if (
        prices[count] < prices[index] &&
        prices[count + 1] > prices[count] &&
        count + 1 < prices.length
      ) {
        index = count;
        break;
      } else if (prices[count] > prices[index]) {
        break;
      } else {
        index = count;
      }
    }

    for (count = index + 1; count < prices.length; count++) {
      if (count + 1 < prices.length && prices[count + 1] < prices[count]) {
        maxProfit += prices[count] - prices[index];
        index = count;
        break;
      }
    }
  }
  if (prices[count - 1] > prices[index]) {
    maxProfit = prices[count - 1] - prices[index];
  }

  return maxProfit;
}

bestTimeToBuyAndSellPeakValleyApproach(prices);

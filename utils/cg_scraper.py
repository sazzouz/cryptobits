from pycoingecko import CoinGeckoAPI
import pprint as pp


cg = CoinGeckoAPI()
coin_list = cg.get_coins_list()
# print(coin_list)
pp.pprint(cg.get_coin_by_id("prometeus"))

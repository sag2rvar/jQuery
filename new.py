# t_money = int(input("enter the money"))
t_money = 15
choc_cost = 1
rappers_choc = 3

choc_bought = t_money // choc_cost
t_choc = choc_bought
for i in range(choc_bought):
    if choc_bought >= rappers_choc:
        choc_bought = choc_bought - (rappers_choc-1)
        t_choc = t_choc + 1

        print("total chocolates:",t_choc)

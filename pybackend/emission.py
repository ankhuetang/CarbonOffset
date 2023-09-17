'''
GWP Values (100-year period):

CO₂: 1 (by definition)
Methane (CH₄): 28-36
Nitrous Oxide (N₂O): 298
Perfluorocarbons (PFCs): 7,390 to 12,200 (varies significantly depending on the specific compound)
Hydrofluorocarbons (HFCs): 12 to 14,800 (varies significantly depending on the specific compound)
Sulfur Hexafluoride (SF₆): 23,500

metric: metric tons

'''
def calc_emission(CO2, Methane, Nitrous, Perf, Sulfur):
    total = CO2 + Methane*32 + Nitrous*298 + Perf*9795 + Sulfur*23500
    return total
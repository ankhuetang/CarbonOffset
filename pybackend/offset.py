'''
1. Planting trees
2. Acres of U.S. forests in one year
3. Acres of U.S. forests preserved from conversion to cropland in one year
4. Windmill
5. Solar Panel
'''

#1. Planting trees
def tree_offsets(age, height, diameter):
    # Determine the total (green) weight of the tree
    if diameter < 11:
        W = 0.25 * diameter**2 * height
    else:
        W = 0.15 * diameter**2 * height

    # Add the weight of the root system
    total_green_weight = W * 1.2

    # Determine the dry weight of the tree
    dry_weight = total_green_weight * 0.725

    # Determine the weight of carbon in the tree
    carbon_weight = dry_weight * 0.5

    # Determine the weight of carbon dioxide sequestered in the tree
    CO2_weight = carbon_weight * 3.6663

    # Determine the weight of CO2 sequestered in the tree per year
    CO2_sequestered_per_year = CO2_weight / age
    
    # Convert the CO2 sequestered per year from pounds to metric tons
    CO2_sequestered_per_year_metric_tons = CO2_sequestered_per_year / 2204.62
    
    carbon_offset = CO2_sequestered_per_year_metric_tons

    return carbon_offset

#2. Acres of U.S. forests in one year
# Carbon sequestered annually by one acre of average U.S. forest: 0.7838502919183418 metric ton CO2/acre/year
def forest_offsets():
    def annual_net_change(t, t_plus_1):
        """Calculate the annual net change in carbon stocks in metric tons"""
        return (t_plus_1 - t) * 1e6

    def stock_density(stock, area):
        """Calculate the carbon stock density in metric tons/hectare"""
        return stock * 1e6 / (area * 1e3)

    def net_change_per_area(net_change, area):
        """Calculate the annual net change in carbon stock per area in metric tons/hectare/year"""
        return net_change / (area * 1e3)

    def sequestered_per_acre(net_change_per_acre):
        """Calculate the carbon sequestered in one year by one acre in metric tons CO2/acre/year"""
        return net_change_per_acre * (44 / 12)

    # Given data in MMT and thousand hectares
    stock_2019 = 58007  # MMT C
    stock_2020 = 58156  # MMT C
    area = 282061  # in thousand hectares

    # Step 1: Calculate annual net change in metric tons
    net_change = annual_net_change(stock_2019, stock_2020)

    # Step 2: Calculate carbon stock density and annual net change per area in metric tons/hectare and metric tons/hectare/year respectively
    density_2020 = stock_density(stock_2020, area)
    net_change_per_area_2020 = net_change_per_area(net_change, area)

    # Conversion Factor for Carbon Sequestered in One Year by 1 Acre of Average U.S. Forest
    net_change_per_acre = net_change_per_area_2020 / 2.47105  # converting hectare to acre
    sequestered_per_acre_2020 = sequestered_per_acre(net_change_per_acre)  # in metric ton CO2/acre/year

    forest_offset = sequestered_per_acre_2020

    return forest_offset


#3. Acres of U.S. forests preserved from conversion to cropland in one year

# Constants
biomass_growth_cropland = 2.25  # mt C/hectare
initial_biomass_stock_forest = -89.84  # mt C/hectare
annual_biomass_loss = 0.0  # mt C/hectare/year (assumed to be zero)

last_year_soil_carbon_stock = 41.13  # mt/hectare
begin_inventory_soil_carbon_stock = 116.0  # mt/hectare
transition_period = 20.0  # years

ef_cropland = 13.17  # mt C/hectare/year
ef_forestland = 2.60 + 0.31  # mt C/hectare/year

def cropland_offsets():

    # Calculations
    # Annual change in carbon stocks in biomass on land converted to cropland
    delta_CB = biomass_growth_cropland + initial_biomass_stock_forest - annual_biomass_loss

    # Annual change in organic carbon stocks in mineral and organic soils
    delta_CSoil = (last_year_soil_carbon_stock - begin_inventory_soil_carbon_stock) / transition_period

    # Annual change in emissions from drained organic soils
    delta_LOrganic = ef_cropland - ef_forestland

    # Total change in carbon density from converting forestland to cropland
    total_carbon_loss_hectare = delta_CB + delta_CSoil - delta_LOrganic  # mt C/hectare/year

    # Convert to CO2
    total_co2_loss_hectare = total_carbon_loss_hectare * (44 / 12)  # mt CO2/hectare/year

    # Convert hectare to acre (1 hectare = 2.47105 acres)
    total_co2_loss_acre = total_co2_loss_hectare / 2.47105  # mt CO2/acre/year

    cropland_offset = -total_co2_loss_acre

    return cropland_offset


#4. Windmill
'''
Turbine Capacity: 2000 kW
Capacity Factor: 0.3 (30%)
Emissions Factor: 0.4 kg CO2/kWh
Lifecycle Emissions: 5,000,000 kg (this is a cumulative total over the expected lifetime of the turbine)
Hours in a Year : year
turbine lifetime : year
'''
def windmill_offsets(turbine_capacity, capacity_factor, hours_in_year, emissions_factor, turbine_lifetime, lifecycle_emissions):
    electricity_production = turbine_capacity * capacity_factor * hours_in_year
    co2_emission_avoided = electricity_production * emissions_factor
    net_co2_sequestration = co2_emission_avoided * turbine_lifetime - lifecycle_emissions

    windmill_offset = net_co2_sequestration/1000
    
    return windmill_offset


# 5.Solar Panel

def solar_offsets():
    
    return
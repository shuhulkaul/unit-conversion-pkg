# unit-conversion-pkg

unit-conversion-pkg is a Node.js package for converting units.

## Installation

This is a Node.js module available through the npm registry.
Installation is done using the npm install command:

```bash
npm install unit-conversion-pkg
```

## Usage

```js
const cu = require('unit-conversion-pkg');

cu.measure('dist', 2, 'm') # returns the converted value of 2 meters in all the other units.
cu.measure('vol', 2, 'ml') # returns the converted value of 2 milliliters in all the other units.
cu.measure('dist', 2, 'm').result['km'] # returns the converted value of 2 meters in kilometers.

```

## API

[API Documentation](https://github.com/shuhulkaul/unitconversionAPI/)

## Types

> **_dist_** Distance

- **_mic_** ----> Micron

- **_mm_** ----> Millimeter

- **_cm_** ----> Centimeter

- **_m_** ----> Meter

- **_km_** ----> Kilometer

- **_mil_** ----> Mils/Thou

- **_in_** ----> Inches

- **_ft_** ----> Feet

- **_yd_** ----> Yards

- **_mi_** ----> Miles

- **_nm_** ----> Nautical Miles

- **_fm_** ----> Fathoms

- **_ch_** ----> Chains

- **_fur_** ----> Furlongs

- **_ly_** ----> Light Years

> **_area_** Area

- **_sqmm_** ----> Sq. Millimeter

- **_sqcm_** ----> Sq. Centimeter

- **_sqm_** ----> Sq. Meter

- **_ha_** ----> Hectares

- **_sqkm_** ----> Sq. Kilometer

- **_sqin_** ----> Sq. Inches

- **_sqft_** ----> Sq. Feet

- **_sqyd_** ----> Sq. Yards

- **_ac_** ----> Acres

- **_sqmi_** ----> Sq. Miles

> **_vol_** Volume

- **_ml_** ----> Milliliters (cc)

- **_l_** ----> Liters

- **_cum_** ----> Cu. Meter

- **_cuin_** ----> Cu. Inch

- **_cuft_** ----> Cu. Feet

- **_cuyd_** ----> Cu. Yard

- **_ozimp_** ----> Fluid Ounce (IMPERIAL)

- **_ptimp_** ----> Pint (IMPERIAL)

- **_galimp_** ----> Gallon (IMPERIAL)

- **_ozus_** ----> Fluid Ounce (US)

- **_ptus_** ----> Pint (US)

- **_galus_** ----> Gallon (US)

> **_mass_** Mass

- **_micg_** ----> Micrograms

- **_mg_** ----> Milligrams

- **_g_** ----> Grams

- **_kg_** ----> KG

- **_t_** ----> Ton

- **_oz_** ----> Ounce

- **_lb_** ----> Pound

- **_st_** ----> Stone

- **_cwtus_** ----> Hundredweight (US)

- **_cwtuk_** ----> Hundredweight (UK)

- **_stus_** ----> Short Tons (US)

- **_stuk_** ----> Long Tons (UK)

> **_speed_** Speed

- **_mps_** ----> Meter per sec

- **_kmph_** ----> KMPH

- **_ftps_** ----> Feet per second

- **_mph_** ----> MPH

- **_kt_** ----> Knots

> **_time_** Time

- **_ns_** ----> Nanoseconds

- **_mics_** ----> Microseconds

- **_ms_** ----> Milliseconds

- **_s_** ----> Seconds

- **_min_** ----> Minutes

- **_hr_** ----> Hours

- **_d_** ----> Days

- **_wk_** ----> Weeks

- **_yrg_** ----> Years (Gregorian)

- **_yrj_** ----> Years (Julian)

> **_force_** Force

- **_micn_** ----> Micro-newtons

- **_mn_** ----> Millinewtons

- **_n_** ----> Newtons

- **_kn_** ----> Kilonewtons

- **_kgf_** ----> Kilogram-Force

- **_lbf_** ----> Pound Force

> **_press_** Pressure

- **_pa_** ----> Pascal

- **_hpa_** ----> Hectopascal

- **_kpa_** ----> Kilopascal

- **_mpa_** ----> Megapascal

- **_mbar_** ----> Millibar

- **_bar_** ----> Bar

- **_atm_** ----> atm

- **_kgpsqcm_** ----> Kilogram per sq. cm

- **_psi_** ----> psi

- **_hg_** ----> Inches of Mercury

- **_torr_** ----> Torr

> **_energy_** Energy

- **_j_** ----> Joules

- **_kj_** ----> Kilojoules

- **_mj_** ----> Megajoules

- **_kwh_** ----> kWh

- **_cal_** ----> Calories

- **_kcal_** ----> Kilocalories

- **_btu_** ----> BTU

> **_power_** Power

- **_w_** ----> Watts

- **_kw_** ----> Kilowatts

- **_mw_** ----> Megawatts

- **_calps_** ----> Calories per sec

- **_btuph_** ----> BTU/h

- **_hpi_** ----> Horsepower (mech)

- **_hpm_** ----> Horsepower (metric)

> **_temp_** Temperature

- **_c_** ----> Celsius

- **_f_** ----> Fahrenheit

- **_k_** ----> Kelvin

> **_data_** Data Size

- **_b_** ----> B

- **_kib_** ----> KiB

- **_mib_** ----> MiB

- **_gib_** ----> GiB

- **_tib_** ----> TiB

- **_kb_** ----> kB

- **_mb_** ----> MB

- **_gb_** ----> GB

- **_tb_** ----> TB

## Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

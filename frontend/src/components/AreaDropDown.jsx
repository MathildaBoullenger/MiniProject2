// using MUI Combo box
{/*import React from 'react';
import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';

export const AreaDropDown = () => {


  return (
    <Autocomplete
      disablePortal
      id="combo-box-demo"
      options={topAucklandSuburbs}
      sx={{ width: 300 }}
      renderInput={(params) => <TextField {...params} label="Auckland Area" />}
    />
  );
};

const topAucklandSuburbs = [
  { label: 'Arch Hill' },
  { label: 'Auckland CBD' },
  { label: 'Avondale' },
  { label: 'Balmoral' },
  { label: 'Blackpool' },
  { label: 'Blockhouse Bay' },
  { label: 'Eden Terrace' },
  { label: 'Eden Valley' },
  { label: 'Ellerslie' },
  { label: 'Epsom' },
  { label: 'Freemans Bay' },
  { label: 'Glendowie' },
  { label: 'Glen Innes' },
  { label: 'Grafton' },
  { label: 'Greenlane' },
  { label: 'Greenwoods Corner' },
  { label: 'Grey Lynn' },
  { label: 'Herne Bay' },
  { label: 'Hillsborough' },
  { label: 'Kingsland' },
  { label: 'Kohimarama' },
  { label: 'Lynfield' },
  { label: 'Meadowbank' },
  { label: 'Mission Bay' },
  { label: 'Morningside' },
  { label: 'Mount Albert' },
  { label: 'Mount Eden' },
  { label: 'Mount Roskill' },
  { label: 'Mount Wellington' },
  { label: 'Newmarket' },
  { label: 'Newton' },
  { label: 'New Windsor' },
  { label: 'Onehunga' },
  { label: 'Oneroa' },
  { label: 'Onetangi' },
  { label: 'One Tree Hill' },
  { label: 'Orakei' },
  { label: 'Oranga' },
  { label: 'Ostend' },
  { label: 'Ōtāhuhu' },
  { label: 'Owairaka' },
  { label: 'Palm Beach' },
  { label: 'Panmure' },
  { label: 'Parnell' },
  { label: 'Penrose' },
  { label: 'Point England' },
  { label: 'Point Chevalier' },
  { label: 'Ponsonby' },
  { label: 'Remuera' },
  { label: 'Royal Oak' },
  { label: 'Saint Heliers' },
  { label: 'St Johns' },
  { label: 'Saint Marys Bay' },
  { label: 'Sandringham' },
  { label: 'Stonefields' },
  { label: 'Surfdale' },
  { label: 'Tamaki' },
  { label: 'Te Papapa' },
  { label: 'Three Kings' },
  { label: 'Waikowhai' },
  { label: 'Wai o Taiki Bay' },
  { label: 'Waterview' },
  { label: 'Western Springs' },
  { label: 'Westfield' },
  { label: 'Westmere' },
];*/}

//lifiting State

import React, { useState } from 'react';
import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';

export const AreaDropDown = ({ onValueChange }) => {
  const [selectedValue, setSelectedValue] = useState(null);

  const handleValueChange = (_, value) => {
    setSelectedValue(value);
    onValueChange?.(value);
  };

  return (
    <Autocomplete
      disablePortal
      id="combo-box-demo"
      options={topAucklandSuburbs}
      sx={{ width: 300 }}
      value={selectedValue}
      onChange={handleValueChange}
      renderInput={(params) => <TextField {...params} label="Auckland Area" />}
    />
  );
};

const topAucklandSuburbs = [
  { label: 'Arch Hill' },
  { label: 'Auckland CBD' },
  { label: 'Avondale' },
  { label: 'Balmoral' },
  { label: 'Blackpool' },
  { label: 'Blockhouse Bay' },
  { label: 'Eden Terrace' },
  { label: 'Eden Valley' },
  { label: 'Ellerslie' },
  { label: 'Epsom' },
  { label: 'Freemans Bay' },
  { label: 'Glendowie' },
  { label: 'Glen Innes' },
  { label: 'Grafton' },
  { label: 'Greenlane' },
  { label: 'Greenwoods Corner' },
  { label: 'Grey Lynn' },
  { label: 'Herne Bay' },
  { label: 'Hillsborough' },
  { label: 'Kingsland' },
  { label: 'Kohimarama' },
  { label: 'Lynfield' },
  { label: 'Meadowbank' },
  { label: 'Mission Bay' },
  { label: 'Morningside' },
  { label: 'Mount Albert' },
  { label: 'Mount Eden' },
  { label: 'Mount Roskill' },
  { label: 'Mount Wellington' },
  { label: 'Newmarket' },
  { label: 'Newton' },
  { label: 'New Windsor' },
  { label: 'Onehunga' },
  { label: 'Oneroa' },
  { label: 'Onetangi' },
  { label: 'One Tree Hill' },
  { label: 'Orakei' },
  { label: 'Oranga' },
  { label: 'Ostend' },
  { label: 'Ōtāhuhu' },
  { label: 'Owairaka' },
  { label: 'Palm Beach' },
  { label: 'Panmure' },
  { label: 'Parnell' },
  { label: 'Penrose' },
  { label: 'Point England' },
  { label: 'Point Chevalier' },
  { label: 'Ponsonby' },
  { label: 'Remuera' },
  { label: 'Royal Oak' },
  { label: 'Saint Heliers' },
  { label: 'St Johns' },
  { label: 'Saint Marys Bay' },
  { label: 'Sandringham' },
  { label: 'Stonefields' },
  { label: 'Surfdale' },
  { label: 'Tamaki' },
  { label: 'Te Papapa' },
  { label: 'Three Kings' },
  { label: 'Waikowhai' },
  { label: 'Wai o Taiki Bay' },
  { label: 'Waterview' },
  { label: 'Western Springs' },
  { label: 'Westfield' },
  { label: 'Westmere' },
];

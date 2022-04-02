import { Box, Paper, Tab, Tabs, Typography } from '@mui/material'
import { useState, SyntheticEvent } from 'react'
import ListCategory from './ListCategory'
import ListWord from './ListWord'
import FavoriteIcon from '@mui/icons-material/Favorite'
import { Link } from 'react-router-dom'

interface TabPanelProps {
  children?: React.ReactNode
  index: number
  value: number
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
    </div>
  )
}

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`
  }
}

export default function AdminHome() {
  const [value, setValue] = useState(0)

  const handleChange = (event: SyntheticEvent, newValue: number) => {
    setValue(newValue)
  }
  return (
    <>
      <Paper elevation={4}>
        <Link to="/words">Ir al juego</Link>
        <Tabs value={value} onChange={handleChange} aria-label="basic tabs example" centered>
          <Tab icon={<FavoriteIcon />} iconPosition="start" label="Palabras" {...a11yProps(0)} />
          <Tab icon={<FavoriteIcon />} iconPosition="start" label="Categorías" {...a11yProps(1)} />
        </Tabs>
        <TabPanel value={value} index={0}>
          <ListWord />
        </TabPanel>
        <TabPanel value={value} index={1}>
          <ListCategory />
        </TabPanel>
      </Paper>
    </>
  )
}

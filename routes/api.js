const express = require('express')
const router = express.Router()
const axios = require('axios')

// Config Defaults Axios dengan Detail Akun Rajaongkir
//https://api.rajaongkir.com/starter/province
//https://pro.rajaongkir.com/api/province
axios.defaults.baseURL = 'https://pro.rajaongkir.com/api'
axios.defaults.headers.common['key'] = 'c19c393022742e406aa77491fc9d6d9b'
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';

// Router GET province
router.get('/province', (req, res) => {
  axios.get('/province')
    .then(response => res.json(response.data))
    .catch(err => res.send(err))
})

// Router GET city by province_id
router.get('/city/:provId', (req, res) => {
  const id = req.params.provId
  axios.get(`/city?province=${id}`)
    .then(response => res.json(response.data))
    .catch(err => res.send(err))
})

// Router GET subdistrict by city_id
router.get('/subdistrict/:cityId', (req, res) => {
  const id = req.params.cityId
  axios.get(`/subdistrict?city=${id}`)
    .then(response => res.json(response.data))
    .catch(err => res.send(err))
})

// Router GET costs
router.get('/cost/:asal/:tujuan/:berat/:kurir', (req, res) => {
  const param = req.params
  axios.post('/cost', {
      origin: param.asal,
      originType:'city',
      destination: param.tujuan,
      destinationType:'subdistrict',
      weight: param.berat,
      courier: param.kurir
    })
    .then(response => res.json(response.data))
    .catch(err => res.send(err))
})

module.exports = router
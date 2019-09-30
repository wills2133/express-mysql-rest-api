'use strict'

const { validationResult } = require('express-validator/check')

module.exports = {
  create(req, res) {
    const errors = validationResult(req)
    if (!errors.isEmpty()) {
      return res.status(422).json({ errors: errors.array() })
    }
    const diseaseIndex = {"高血压": 2,
    "高脂血": 2,
    "糖尿病": 4,
    "肿瘤": 3,
    "脑卒中": 2,
    "冠心病": 5,
    "慢性阻塞性肺疾病": 3,
    "痛风": 4,}
    
    const height = parseInt(req.body["height"])
    const weight = parseInt(req.body["weight"])
    const drink = req.body["drink"] == "没有" ? 0: 3
    const smoke = req.body["smoke"] == "没有" ? 0: 5
    const sedentary = req.body["sedentary"] ? 3: 0
    const vegetarian = req.body["vegetarian"] ? 4: 0
    let sum = 0
    if(!!req.body["diseaseHistories"]){
      console.log("22")
      req.body["diseaseHistories"].split(',').forEach((item)=>{
        sum += diseaseIndex[item]
      })
    }
    const diseases = sum ? sum : 0 
    let date = new Date()
    let bd = date.getYear() + 1900
    if(!!req.body["birthday"]){
      bd = parseInt(req.body["birthday"].split('-')[0])
    }
    const age = date.getYear() + 1900 - bd
    const gender = req.body["gender"] ? 1: 0
    const params = {}

    const bmiGLB = weight *10000 / height / height //bmi scrore
    const bfrGLB = bmiGLB * 1.2 + (0.23 * age - 5.4) - (10.8 * gender)
    const base = bfrGLB < 14 ? 0 : bfrGLB > 27 ? 27-14 : bfrGLB - 14
    const recomdSocre = base + drink + smoke + sedentary + vegetarian + diseases
    let recomdIdx = recomdSocre * 10 / 40
    // recomdIdx = recomdIdx > 9 ? 9 : recomdIdx

    // params['height'] = height
    // params['weight'] = weight
    params['drink'] = drink
    params['smoke'] = smoke
    params['sedentary'] = sedentary
    params['vegetarian'] = vegetarian
    params['diseases'] = diseases
    // params['age'] = age
    params['gender'] = gender
    params['bmiGLB'] = bmiGLB
    params['base'] = base
    params['recomdSocre'] = recomdSocre
    params['recomdIdx'] = recomdIdx
    // console.log("params", params);
    
    return res.status(200).json({ recommendationIndex: recomdIdx.toFixed(0) })
  },
}

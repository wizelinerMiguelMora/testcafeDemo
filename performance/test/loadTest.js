import http from 'k6/http'
import  { check, sleep } from 'k6'

export default function() {
    let domainURL = 'https://test.k6.io'
    let contactURL = './contacts.php'
    let response
    let requestURL
    
    //Transaction 1: Home Page
    response = http.get(domainURL)
    check(response, {
        'Is Status 200': res => res.status === 200,
        'Includes test': res => res.body.includes('Collection of simple web-pages suitable for load testing.')
    })
    sleep(1)

    //Transaction 2: Contact Page
    requestURL = `${domainURL}${contactURL}`
    response = http.get(requestURL)
    check(response, {
        'Is Status 200': res => res.status === 200,
        'Includes test': res => res.body.includes('Contact us')
    })
    sleep(1)
}
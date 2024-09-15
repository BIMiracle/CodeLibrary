function getIpLocation(ip) {
	return new Promise((resolve, reject) => {
		fetch(`https://api.iplocation.net/?cmd=ip-country&ip=${ip}`)
			.then(response => response.json())
			.then(data => {
				console.log(data)
			})
			.catch(error => {
				console.error(error)
			})
	})
}
getIpLocation('220.160.67.89')

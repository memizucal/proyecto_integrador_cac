
const imgToBase64 = () => {
	return new Promise((resolve, reject) => {
	  let fileInput = document.querySelector(".input-img");
	  let urls = [];
  
	  const handleFile = (file) => {
		const fileReader = new FileReader();
  
		fileReader.onload = () => {
		  const srcData = fileReader.result;
		  const urlSplit = srcData.split(",");
		  const url = urlSplit[1];
		  urls.push(url);
  
		  if (urls.length === fileInput.files.length) {
			urls.forEach((url, index) => {
				localStorage.setItem(`url_${index}`, url);})

			resolve(urls); // Resolvemos la promesa con la lista de URLs de datos generadas
		  }
		};
  
		fileReader.readAsDataURL(file);
	  };
  
	  const handleInputChange = () => {
		const selectedFiles = fileInput.files;
		Array.from(selectedFiles).forEach((file) => {
		  handleFile(file);
		});
	  };
  
	  fileInput.addEventListener('change', handleInputChange);
	});
  };

  const retrieveUrlsFromLocalStorage = () => {
	const urls = [];
	const localStorageKeys = Object.keys(localStorage);
  
	localStorageKeys.forEach((key) => {
	  if (key.startsWith("url_")) {
		const url = localStorage.getItem(key);
		urls.push(url);
	  }
	});
  
	return urls;
  };
// var imgToBase64 = () => {
// 	var url = [];
// 	let file = document.querySelector(".input-img")
// 	file.addEventListener('change', (e) => {
// 		debugger
// 		const selectedfiles = e.target.files;
// 		if (selectedfiles.length > 0) {
// 			for(let i=0; i <= selectedfiles.length; i++) {
// 				let imageFile = selectedfiles.item(i);				
// 				const fileReader = new FileReader();
// 				fileReader.onload = () => {
// 					const srcData = fileReader.result;
// 					const urlSplit = srcData.split(",");
// 					var urlIndex = urlSplit[1];
// 					url.push(urlIndex);
// 					console.log(srcData)
// 					console.log(url)
// 					localStorage.setItem('url', url);
// 				};

// 				fileReader.readAsDataURL(imageFile); //Aca no me reconoce el imageFile como un file or blob
// 			}
// 		}
// 	})
// }

export { imgToBase64, retrieveUrlsFromLocalStorage }
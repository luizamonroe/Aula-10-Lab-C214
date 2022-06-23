from Client_API.client import API

if __name__ == "__main__":

    url = 'http://localhost:5000/music'
    api = API(url)

    data0 = {
         name: "Jorge",
        band: "Jorge e Mateus"
    }

    data1 = {
        "name": "Ze Neto",
        "band": "Ze Neto e Cristiano"
    }

    update = {
        "name": "Mateus",
        "band": "Jorge e Mateus"
    }

    delete = {"band": "Ze Neto e Cristiano"}

    api.get()
    api.post(data0)
    api.post(data1)
    api.get()
    api.put(update)
    api.get()
    api.delete(delete)
    api.get()
    
const SearchMobile = () => {
    var SearchInput = document.querySelector("#search-item").value.toUpperCase();

    var Data = document.querySelector("#mobile");
    var card = Data.querySelectorAll(".card");
    for (i = 0; i < card.length; i++) {
        var mobileName = card[i]
            .querySelector(".container")
            .querySelector(".mobile-name").textContent;

        if (mobileName.toUpperCase().includes(SearchInput)) {
            card[i].style.display = "";
        } else {
            card[i].style.display = "none";
        }
    }
};

var mobiles = {
    detail: [
        {
            brand: "Iphone",
            mobileName: "iPhone 13 Mini",
            color: " Color: Blue",
            memory: "256 gb",
            ram: "6 gb",
            price: 190000,
            image: "13mini.jpg",

        },
        {
            brand: "Iphone",
            mobileName: "iPhone 13",
            color: "Pink",
            memory: "256 gb",
            ram: "8 gb",
            price: 210000,
            image: "13pink.jpg",

        },
        {
            brand: "Iphone",
            mobileName: "iPhone 12",
            color: "Blue",
            memory: "256 gb",
            ram: "8 gb",
            price: 171000,
            image: "12blue.png",

        },
        {
            brand: "Samsung",
            mobileName: "Samsung Galaxy S22",
            color: "White",
            memory: "512 gb",
            ram: "12 gb",
            price: 290000,
            image: "S22.jpg",

        },
        {
            brand: "Samsung",
            mobileName: "Samsung Galaxy S22 Ultra",
            color: "Green",
            memory: "512 gb",
            ram: "12 gb",
            price: 330000,
            image: "S22Ultra.jpg",

        },
        {
            brand: "Samsung",
            mobileName: "Samsung Galaxy A52 S",
            color: "Black",
            memory: "128 gb",
            ram: "6 gb",
            price: 47000,
            image: "A52S.png",

        },
        {
            brand: "Samsung",
            mobileName: "Samsung Galaxy A32",
            color: "Ice Blue",
            memory: "128 gb",
            ram: "8 gb",
            price: 51000,
            image: "A32.jpg",

        },

        {
            brand: "Samsung",
            mobileName: "Samsung Galaxy A73",
            color: "Grey",
            memory: "256 gb",
            ram: "8 gb",
            price: 51000,
            image: "A73.jpg",

        },
        {
            brand: "Samsung",
            mobileName: "Samsung Galaxy Note 20",
            color: "Greenish",
            memory: "256 gb",
            ram: "12 gb",
            price: 180000,
            image: "Note20.jpg",

        },
        {
            brand: "Samsung",
            mobileName: "Samsung Galaxy S21",
            color: "Sky Blue",
            memory: "512 gb",
            ram: "12 gb",
            price: 280000,
            image: "Galaxy21.webp",

        },
        {
            brand: "Samsung",
            mobileName: "Samsung Galaxy S22 Ultra",
            color: "Copper Brown",
            memory: "512 gb",
            ram: "12 gb",
            price: 380000,
            image: "S22UltraCopper.webp",

        },
        {
            brand: "Samsung",
            mobileName: "Samsung Galaxy Note 11",
            color: "Oxygen Blue",
            memory: "64 gb",
            ram: "6 gb",
            price: 45000,
            image: "data:image/jpeg;base64,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",

        },
        {
            brand: "Oppo",
            mobileName: "Oppo A15",
            color: "Blue",
            memory: "128 gb",
            ram: "6 gb",
            price: 45000,
            image: "https://www.pakmobizone.pk/wp-content/uploads/2021/02/Oppo-A15-Mystery-Blue-2.jpg",

        },
        {
            brand: "Oppo",
            mobileName: "Oppo A92",
            color: "Stream White",
            memory: "128 gb",
            ram: "8 gb",
            price: 50000,
            image: "data:image/jpeg;base64,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",

        },
        {
            brand: "Oppo",
            mobileName: "Oppo A96",
            color: "Black",
            memory: "128 gb",
            ram: "8 gb",
            price: 55000,
            image: "https://www.oppo.com/content/dam/oppo/common/mkt/v2-2/a96-en/navigation/A96-navigation-blue-v1.png",

        },
        {
            brand: "Oppo",
            mobileName: "Oppo F18",
            color: "Black",
            memory: "64 gb",
            ram: "4 gb",
            price: 25000,
            image: "https://pricespakistan.pk/wp-content/uploads/2022/01/oppo-f18-1.png",

        },
        {
            brand: "Oppo",
            mobileName: "Oppo F19",
            color: "Green",
            memory: "128 gb",
            ram: "6 gb",
            price: 36000,
            image: "https://modernelectronics.pk/wp-content/uploads/2022/02/f19-Pro.jpg",

        },
        {
            brand: "Oppo",
            mobileName: "Oppo F21",
            color: "Leather Orange",
            memory: "128 gb",
            ram: "8 gb",
            price: 56000,
            image: "https://www.pakmobizone.pk/wp-content/uploads/2022/03/Oppo-F21-Pro-Sunset-Orange-4.jpg",

        },
        {
            brand: "Oppo",
            mobileName: "Oppo Find X5 Pro",
            color: "White",
            memory: "256 gb",
            ram: "8 gb",
            price: 116000,
            image: "data:image/jpeg;base64,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",

        },
        {
            brand: "Oppo",
            mobileName: "Oppo Reno 3",
            color: "Black",
            memory: "64 gb",
            ram: "4 gb",
            price: 26000,
            image: "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoHCBIWFRgSFRIYGBgYGRgYGBgYGBgYGBgYGBgaGRgYGhgcIS4lHB4rHxgYJjgmKy8xNTU1GiQ7QDs0Py40NTEBDAwMEA8QHhISHzUrJSs0NDQ2NDQxOjQxNDQ0PTQ0NDQxNDQ0NDQ0NDc0NDYxNDQ0NDQ0NDQ0MTQ0NDQ0NDQ0NP/AABEIAQgAvwMBIgACEQEDEQH/xAAcAAAABwEBAAAAAAAAAAAAAAAAAgMEBQYHAQj/xABQEAACAQICBQUJCgwFAwUAAAABAgADEQQhBQYSMUEiUWFxcxMyNIGRobO0wSMlNVJyk7Gy0fAHFCRCVGN0g5LS0+EWM0RTgkNi8RWEosLD/8QAGAEAAwEBAAAAAAAAAAAAAAAAAAIDAQT/xAAnEQACAgEDBQACAgMAAAAAAAAAAQIRMQMSIRMyQVFhBLGRoXHB8P/aAAwDAQACEQMRAD8A2aCCRGsOmFwtE1SpdiQtOmvfVHbvUH0+KAEvOTPlTGYl3Wvi3pbFtunh9kBCcwhqG4ZrWuLG3xjOnVin+m43+Oj/AEptAaBBM8OrVP8ATMZ/HR/pQjavU/0zGfx0f6UKA0eCZm2g6Y/1mM/jo/0ok+iaY/1mM/jo/wBKFAajBMmfR9Mf6vF/x0f6UresWlGoMEo1cQ7NybVHTNsiQoRFPJBF2J/OHTYoDemYDeQOuF7unxx5RPOVP8bflu1Mk/HD1D4yWt5Ip+K1ueh803803ZL0LuXs9Ed2T4w8og7snxh5RPPC4Wsb50MhcnuTc4HxukTiYaqWCXoC439ybhw76GyXoN0T0R3dPjDyiDu6fGHlEwP/ANArOLd1ojjyabqfKGnf8KVv99P4Kv8AUm7JGb4+ze+7p8YeUQd3T4w8omBHVat/v0/4av8APD0tWK4N+7Uj0MlRh5C8Nkg3x9m9d3T4w8og7unxh5RMMGruI/3MP8y/805/h3Ef7mH+Zb+aZsYb4+zdO7p8YeUQy1FO5geogzCjq5iP9zD/ADL/AM8K+rmJtyauHvw9zdM/lBribtZu+Ps3qCYhq/rbpDA10oYoF6T7htFwVHfGkxzDAZ7BOe6wJBm1UqisqspBVgCpG4gi4I8UQZOxaVHTeK98cKhFwqMwHDacVM+sCkfLLbKRp4++lDs0+pi4AI6v1guGNZz371art1u3sAErWkNZMS5Lo4o07nYFlLsAbbTEjIdVo+qVSuitobxb04lQ0pTLBDbaVRbZvb82w+/TGSswc4rWrGU7MK22OYhSD0HLKW/QOm0xNIVALNuZeY846Mj5JlWkrBTlshmuqC9lGZIFyTYXtc75ZPwZ1TaovAA2/iX7T5YAX2o0Z1Wi1V4yqvABGq8p2lF92DHO1GmR11NqoxHXtDyS0VXla0iPdF7HDeiWPpdyFn2kDpVapZcnKBbLsXPKz74DxeLdIw0av+3U/hf7JeUwdQG2zc9BB9sWXCVPikDiWFgOePJQbuxIyklVEJqvTdTUJVwnc7e6ZEvtrmo4C1x7eaTqXFmGZXPrH2WjuoR3qjL42d35j0DmHthCmXHz7uOUIrh/RZStokMFVuJI06kruGfZOyeG7qP3tJik+QjrlCvhjsmdUQimKLBmBhO3gnLTADQQCdM0CJ1kohsO7kZ0rVkPM1MhsusAjxzSNTal8Kq/EerTHyadV1UeIADxTPNP+DV+yf6pl91F8Gb9oxXrFSQ1VyW0sFjlG0+ffSh2afVxkvMousHwpR7NPq4yTRUruJb3qbqHphKzjHst72B3dNuaWLEn3qPUPTCVPShBKswYoF2bL8YDLfwvc+OMlbowh8SoLptZqzqDnvG0AwvwNjLH+DY2NUfK+usrOIttqUUorOmyoZsjcX2W77Invt+eW6WP8HbZ1P8Alv39+vGHkC71XjKs8UqvGNZ4AJVXkZWpoXBYE+44bcQP+ip5jHVZ4i68oH9VhvQJGh3Cz4icrPtMWyG61jzWAz+/mnaZJFyb3PSfvwhLC9j5eGfP58vsiy8kZiWSS4RBtsMg+++dKzjG2doPxheY7iSbZWAzN+bdGtIWmxtil2SG6bHLgZIYN7iMsU62IOR3EEW+mK6Ic7FzxJt1c/jN4qa8DVxyS6mOae6Mw8eqLCazA0EE6BMA6BAZ0TloyQpHawD8mr9k/wBUy+aieCn9oxfrNSUTWDwav2T/AFTL3qJ4Kf2jF+s1JDVyjo0sFklE1iPvpR7NPqYyXuULWP4Uo9mn1MZJIqVnEn3qPUPTCVbGkgb7X8/TLNXPvX4h6YSrY5+JFxyQfFw6jGMIT8WqVKiJTRqjswCoubMRns+QHxAyxahKyd0VlKsNpWUixUhlBBB3EGRermkaeHxtDEVWKojsSVBZlUoyhrDM2LDzyb0BilqYjFVVN1qVazqxGySrVAQSOFwd0zyaWKs8Y1nilV4yrPNMEqrxzTS5/d4b0CSOqPJSgcz2eG9AkeHcJq9ohiEI5Skgj7n6YphiCl7g3z6RO4hwAbnn3xLDHkjpzl6OdPgVZubLq+3njeruz/t5I4fPdEXp3g0gTZXkao1Zqak7GXJIuBtWF8t1rcObplooKEVVHAAeTjIM1qdCsXcMxddhVUXOWZa98rbrWN78LSy6Npd0XujAqDuUgg+MGTVKTRSV0mOMKhJ2jwj6FRABYCGjCAEMJwTs1ACdEAgjCkfrB4NX7N/qmXrUXwU/tGL9ZqSi6f8ABq/ZVPqy9ai+Cn9oxfrNSQ1snRo4LJKFrL8KUOzT6mMl9lB1mPvpQ7NPqYyRRUqlU+9oHQvpRKlpIgAXOZ4ffoz8YlzwdLbwaILXKki+66vtAHouBKTjXdTuZXS6nLMXGyeHN/aMqvkwr2NHQQQbEEWIPUcx1SzajtZG/wCX0rK5jdt2J2WZmNybMfKx3knMky26uYQ06QuLEg+Mk3J6u9Hih5AmKrxlVeKVXjSo8AEqjyTfFqjWN7mnhzYAn/oJIZ2k/Rwhdzs02cinhxZVLZGgm+2Q8caLSlbFmrjQyNUu45HJG65Fz05RzsnmJ3nIEmwFzYDM2GclcPoSoQQwFKwy2yrsW5thDkOkkcI+0Zge5Kdoh3JYs9iDYnJVH5qgAZDeRc3lOpfC5/RHZWeP2Q2GwtZ8kpFBY3etyF45bPfEmx4AdMk6WhqQW1XEu7XB2qaqihfihSrZ9JPCSJtzRJliyjKXmv8ABsZRjhfyRWD0LQpOaiO9VzyVeoF5AF7leSLXBtl7ZJKp4m54wCdJmw01F3l+2EpuSrwcME6JyUoQEMIWGE1CggggmgR+n/Bq/Zv9WXvUXwY/tGL9ZqSiaf8ABq/Zv9Eveovgx/aMV6zUkNbKOjRwyxzP9afhWh2S/Uxk0CZvrJUJ0tTU2sqLs5WyNHFnPnzv5ZFFSF0S35NT6j9YxPFUabm7oCefj5RnCaMb8np9R+sZyo8YwbPhaQz7mMue7eYmJVXilV4zqvAAlR40qPFKjxs7wANh7GoinMF0BHOCwBEvOrrkoy3NtnDk58fxWnb79MoWDb3Wn2ifXWX7Vgchvk4f1WnNik3yLJtRJXZtCMI4ZYgykcJc5wloRzDmEYTUAkRObocrCNNFOiAicUw80Atp20PBAAkFp2CAEdp/wav2b/RL3qL4Mf2jFes1JRNPeDVuzf6JddQHJw9QE5DFYkL0DurG3TmSfHIa2UX0cMtMzTWU++9Ps09Di5pczTWdSNLUybWampXPgKOLGfNnfySSLFbwD/k9P5J+kwlR4TBt7hT+T7TEneaYFqPGlR4eo8au0ACu0bO8M7RB2gBwXLALfaJAW2+5OVum9ppurAGw/Vh/VaUzTAn3Wn2lP66zStU/8t+rD+q0psciz7SeCQFIYTpliAyrUOI3/TGl5KtI/F0j3w4b+kfbNRjEWESYQ4a4BBhGMcUKYdY3djDK8AHUESWpDgwABnIGMSdwIANNPn8mrdm/0S6fg98Hq/teJ9IZR9OeDVuzf6JetQaZGHqE2s2JxLC3N3Vlz6bg+aQ1sovo4ZaJnOuB99cP2X/0xc0aZvrj8K4bsv8A88ZIlimYZvcKfyfaYi7wYdvcafyfaYi7xjAlR42d4o7Rq7wAK7RB2hnaIO0AFMPVC1Ec7ldGPUrgnzCajqkOQ/8A7f1WlMkczXNVTyH/AHHqtKbDuFn2k9O3hbwrvLEDrQjCANCs80whjyHZOB5S+M5jy/TE6rxxpO1trilz4uIkA+klNrXz58r9I6JRCMkla847575DV9LonJvdviqNpvIN0Kj4isbIoQcS2ZHWF+0zXSyYk3gnBViiV7b90hE0djFOTI27erAHn32+/PGWLx2KU7H4uAx3ElitszuAuTlumXEapFprVrSKxOkUQ2Lcr4ozY+IRGhgcW4G3UFO67lFyCDuJPOM8rWuJJ6PwNGjfYuSd7Mbues8d01P0LXsh9LaTAovTqKyM6MEDrbaNtwIuCc5quovgp7fFesVJmWs9QPRay7ezc2F+SLd+eFhkZpuo3gv7/FesVJz6+Tp0cFimb65H31w3ZH0eLmkTNddPhXC9ifR4yQLFDoN7inyfaYg7Q1Jvck+T7TEHaMYEdo2doo7Ru7QAKzRFzOuYkxgAVzNa1ZcBHv8AqfVaUyJzNe1WwFNw7uC2yaACk8i4w1I7RXic+PNNh3Cz7SSbSSZ7IZulVZh5QLROnjAbknZz3NkRwzB4SWckiygCwy4CNauEptbbRWa4ADC9t+4dRPnlG+SKXA1OPp32VJdrX2U5Rtzk7gOkxnitIODs9zIyJuSoUdBPP1Xkv+J0L3FMAkgm1wTYWF7HPIDyRnX0Th3PLUnO+ySSvRyTlGUmK0itY7SlBRtVGNRr94gLKDwuBe3WTzytVMNVxNTbuUXcFTvrG3fEZAbpqiaOoAbIppY5EbIIPQb7+EWp4amneoq9QEa2FxRT9FaCSlY7VjxC2OdvzmIuT05SYRFXJVAHMMt8k8XgUcE32Gtkwz8q7m+mQmL0fi1F1YvbfsKgYjnCucz0A9XNCPDuWfZknfCx6HDRtiKqjLexzAGZy3mw5ueNXVz3xr89u5lL9Y2bjrimFwAuWVjc2HKUljlexNzYe2+UaepGPH6RkYN8gAqN3qW+Ubcei5+4jlMECBtnaPHZJA/8QGrsGxItwPPFqVRTmDeEamk1yvAO4tp8DPTaKuFrhVCjub5AW4S8ajeC/v8AFesVJSdPurYavmLCm/WTb6PbLtqN4L++xPrFSR18otoYZYpmeu599cL2Tejxc0yZlruffbC9i3o8XIIuZ7TPuSfJ9pjd2iiN7mnyfaY3doxgm7RBzFHaIO0ACOYixhnaJsYAEczatTu8qD/uo+q0ZibGbXqel0qZ/nUfH+S0Zsciz7SwlgOMSFMi7kc1hzA8/THCIo3DPnO+HaVojZHVApa4a/GxG4Dh5Ydzne2XP9ETxWFN9pB/5+9oRsUQLMvXY5Z5HPr++U54z2Se5V/srKG+K2uxxsXne5xpSdyCwIIUZg/fPjnHtNwQCOIvOiGopcojPTcchTSH3MBp9JhxDSojI7SCNskobMtyOnnH34xlok3Usd4NujcDeS1ZeG77JF4MBCyX/ONhxPQPJHjQjGulNC90YOtRkNrEAkgi98s8jC6O0EwuXrOUN7LcAm/G+8Dq39W+aRCc2/h4ePnPm698XBvNSpUgbvJXdYdFouGrMrvyabEDaBBsNxuN3C0uuovgv77E+sVJWdZh+SYjsn+iWbUXwX99ifWKk5NfKOnQwyxTMdefhbCdk3o8XNOmY68/C2F7F/R4uRRczZD7mnyfaY3dooh5CdXtMQcxjBNzEHMUcxuxgBxjEmM6xibGAHGM3PUeiGp1SScnpDL9loTCmM3fUI2Sr8ul6rQmxyLPBYjhOZz47H7IVsPUHM3jsfPl54/WdlbI0RbPbvgR1iw8u6I1qCkhlAuPIRzSZtEWwqH80C/Eck+aY0pZNVrBAmuqMRsnPeb26reXzw9WixG1TbI7x/Lfcb8JI4rRqtxN+F7H7PpjPDYN1UjLMniR5Lbv7ScYyTa8fPA0pKk/P82DDVAwvutcWO8EcIuAbdMa4nDumy5fk3AIC3tfje+fN447WiCM2J6Nw81jLxd8PKIyXkZszFtkLcC92JyHXbj0SNpjYquN5JGfHNb+IZHKWNEFrAADgBkJAYsbNdsrXCkdOWz9stDgnLkeoYqDGyG9osJrFRH6zD8kxHZP9Eseovgn77E+sVJXNZfBMR2T/RLHqL4IO2xPrFScuvlHXodrLHMw15+FsL2L+jxc0+Zhrz8LYXsX9HipAuZeh5CdXtMQcxVTyE6vaY3doxgm5iLmHcxFjAArGJkwzGJtAApM3rUMe51vl0vVaEwSb5qF/l1u0peqYebHJk8FrRopEgIdTKETs7OQQABiRSKzhmoBriU2lIteN6G4XFzxvwP3vJEpEDTzmpiNBJFaUQKy1OPe26LE/frkvs5Rpj6AdSL2sCfNaZO9rrJsa3c4I+k4O4+zzRwJDrUKvc5g9XQPNJIVcwBYk+Ybr/24ymjqrVjaE1dJ6bpjPWbwSv2T/RLHqJ4IO2xPrFSVvWJfyTEZ3vSe58Usmofgg7XE+sVJLXyi2h2ssczDXr4XwnYv6PFTT5mGvXwvhOxf0eKkC5lYPITq9pjdzFSeQnV7TG7mMYJuYixh3MSYwAKTE2MMxiZmM04TN+/B/wD5dftKfqmHmA/2m/agf5dftafqmHmxyJPtLZaCC8BlSQLzohDFEgALzoWGgvADloR05t/CKXnIAN8jvEbGmFJIG+OcTcDaAJtvA3nq6YzfFIRz33Dn8e6PFWJJ0QGl8IQ11yBzBvu4kcw6LxLD1ABs+fjfp55ZWoKVIYA7Q5XSObqlXx9E03IsbcDvuOHjjfjx6eptWH/TF15b9Pc8r+0H01V2sHiOcUn8eUtWofgg7XE+sVJSNM5Yev00ml21C8DHa4n1ipE/Ki4yKfiyUo2WSZfr38L4TsX+pipqEy/Xv4XwnYv9TFTmOkydjyE6vaY2cxw55C9XtMauYxgm5iTGGcxJjMA4TCGdM5MNOH2ib3qI5CV8rjulO/OPyXD59UwMfZN/1CHIr9qnqmHjRyJPBa7w0QYEbvId39oam4PQeb29IlSQqBDiFnRAAxM4Jwzp+/mt7YMEC05ecJ377+Pxee0BO+CBgcyPrYC5Lqdljzi4I6eY9PVHYN87cn6f7RS95RNrBOVSKxpwY1aRWhTu9wNoMOSvEi+ZNuiU2lWqI/LqOxG8OxPWDw2t81VumQOm9CpVBZbK/PwbmvzHdnK6Wo4SurX/AGCc4KUauio6exNqDgZ7akAdB3+QXM0XULwNe1xPrFSZVjUqoK6VUYEU2RDbk2O8k8GOXRbiZquoXga9rifWKkn+ZKMpJxfFFPxISjFpryWSZdr58L4TsX+pipqMy7Xz4XwnYv6PEzjOwyRzyV6vbGzmLueSvV7Y1YxjAjmJEw7GJmYzQpnDOzhmAcm+6htyMR2yeq4eYF/abpqZUstcfrU9VoD2Rodwk+0uZMTqAeTjxETSrOtUlqIWK0q+ey2/geDdX2RfpkRWIAsMxe+ze1uleY3z+ydw2k75d9bm3sBkTb4wO9ZtApEzCFrQUnDC6m4PETrrlkLmZQ1gL/fKEVNrq+n+0NRTnz6OA+2LGFUK3YmVhXh3aIs0ZCsK5iLGHYxFjKJCsgdbsIjYWs5XNEZlPG4z8ksOoPga9riPWKkhdaG/I8R2bSa1B8DXtMR6xUnPrdx0aPayyTO9dMAz6UwTj85KiLzXVKt/SJNEkJrPoT8apbCuadVGD0aozKVF3Ejip3Ee0CRLHmyupACkWK3UjmIJBjRzLxrJq3iu6M9fC1KbMdpmooatBm/OdWXNFY57JzF5AHQH6xvmnjGECxiZlhOr/wD3t808KdXf1jfNPMNK+Zwywf4c/WN8084dXP1jfNPCgK+ZpmgNZVoV2p1DZMQlJlJICrURdg3J3A2te9rqJUv8N/rG+aeK4jQ7lFTaZ9i+ye5uCAR05EZDLoy432Lp2LJblRsVPSJ4qR1DaH/xvlHNHGBuPi3HyHOYbQ0djFFkrOi83uyDyFRFjhtIbvxtz+8rSvVXol0fpuTkEWIld0rRq7d6LNu2nt3wUDZ5BN+Xmd4zAYc1sw7hpL9LqfO1pz8X0j+l1Pna0OqvQdH6b/oR6TUUampCWyG8g/nXPE3zud978ZJbP3tPN9DDaRS4TFVEBO02zUrLdiANo23mwGfRFLaU/Tq3z1eTcxumeh9mx3fczrGed7aU/Tq3z1eDZ0p+nVvnq83qfDOl9PQTEwhBmAbGlf02t89Xg2NK/ptb56vG63wOj9N8YGIODzTCdjSf6bW+drzjYbSbjZOJruD+aHxD3/4gG8Za/wAMeg/ZffwgawUwq4CmwarVdFqBTfuaBwxDHgxsMua5Nsr6HqSlsFSNrbe3UHyalRnXzMJkmpf4M8TUqCpiFalSHfFgUdwd6oh5S3FwWYCwJsCcxu6IFAUAAAAADIADcAJGUnJ2ysYqKoPBBBFGBOwQQAE5BBADsEEEABOQQQA7BBBAAQQQQAE5BBADsEEEABBBBAAQQQQA5OwQQA//2Q==",

        },
        {
            brand: "Oppo",
            mobileName: "Oppo Reno 4 Pro",
            color: "Greenish",
            memory: "128 gb",
            ram: "8 gb",
            price: 67000,
            image: "https://www.giztop.com/media/catalog/product/cache/dc206057cdd42d7e34b9d36e347785ca/o/p/oppo_reno_4_pro-2_1_1.png",

        },
        {
            brand: "Xiaomi",
            mobileName: "Xiaomi 11T Pro",
            color: "Blue",
            memory: "128 gb",
            ram: "8 gb",
            price: 70000,
            image: "data:image/jpeg;base64,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",

        },
        {
            brand: "Xiaomi",
            mobileName: "Xiaomi 12X",
            color: "Grey",
            memory: "128 gb",
            ram: "8 gb",
            price: 67000,
            image: "https://fdn2.mobgsm.com/vv/pics/xiaomi/xiaomi-12x-1.jpg",

        },
        {
            brand: "Xiaomi",
            mobileName: "Xiaomi K20",
            color: "Red",
            memory: "128 gb",
            ram: "8 gb",
            price: 60000,
            image: "data:image/jpeg;base64,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",

        },
        {
            brand: "Xiaomi",
            mobileName: "Xiaomi 9T",
            color: "Black",
            memory: "128 gb",
            ram: "8 gb",
            price: 65000,
            image: "https://images.priceoye.pk/xiaomi-redmi-9t-pakistan-priceoye-7t9rg.jpg",

        },
        {
            brand: "Xiaomi",
            mobileName: "Xiaomi Mi 11 Lite",
            color: "Sky Blue",
            memory: "128 gb",
            ram: "8 gb",
            price: 56000,
            image: "data:image/jpeg;base64,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Tf05pUENQh6mxBtSmDyV6TxPTPK+IaowpIOTcCy7uqbLNu/jx8F/pmmm8kZmU4ZXqCwvTTaTzG24dN5tTNeYeXYQUqYQb97HiZlTzq1THK608CyEMEbHhMoJlRlMgJFLGUXlTS20mimRp2k34zy3qH2vDzq05JpHXU5vgKYN3VabMBzBsVSI+hGPVOtzHV3mbqG4vnERESstEREAREQBERAEREAx8XhlqU3ptfVZSpsbGx5weY880PHZLiVchlZwTsrU0aor9LKgLI3HZbgeadEiThUcNCLjc5r701fFf5qv/ZPfemr4r/NV/wCydJiWd4kR7M5t701fFf5qv/ZPfeir4j/NV/7J0iI7xIdmc496aviv81X/ALJ6MsqeK/zVf+ydGiO3lwHZnOa2UM6PTdHKOpRgKWIBseB1Nh5weInP10YzfBVD3APUoliQSg1fSj2Kt5Prn0NEi6rvfR8juE4GxzthtS3QKH/MuYKrnVI6y01vxbCk26ts7xE669Rqzk7dRgXBeRxb350h8Rf2Qz0ZtpF+bX9jM7RErxdfM7hOLHNtIedEHXgyJT77aQeIn7IZ2uJ3G+LOYFyOJnNc/wDFT9kMt1sx0hZSFQAnYCuFUMOovs9c7hEY3xfmOzjwXkco/wCnug+KXEtmGOYmqTrIjNruWtbWc7tgNgBst9HV4iRuSSERE4dEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQD//Z",

        },
        {
            brand: "Xiaomi",
            mobileName: "Xiaomi Mi 11 Ultra",
            color: "Matt Black",
            memory: "512 gb",
            ram: "12 gb",
            price: 316000,
            image: "https://media.router-switch.com/media/catalog/product/cache/b90fceee6a5fa7acd36a04c7b968181c/x/i/xiaomi-mi-11-ultra-5g.jpg",

        },
        {
            brand: "Xiaomi",
            mobileName: "Xiaomi Mi Mix 5",
            color: "Matt Black",
            memory: "512 gb",
            ram: "12 gb",
            price: 216000,
            image: "https://whatmobilez.com/wp-content/uploads/2022/01/Xiaomi-Mi-Mix-5-5G-image-1.jpg",

        },
        {
            brand: "Xiaomi",
            mobileName: "Xiaomi Note 9s",
            color: "Greenish",
            memory: "128 gb",
            ram: "8 gb",
            price: 37000,
            image: "https://images.priceoye.pk/xiaomi-redmi-note-9s-pakistan-priceoye-2opb4.jpg",

        },
    ]
};

mobiles.detail.map((i) => {
    var card = document.createElement("div");

    card.classList.add("card", i.brand, "hide");

    var imgContainer = document.createElement("div");

    imgContainer.classList.add("image-container");

    var image = document.createElement("img");
    image.classList.add("fimage");

    image.setAttribute("src", i.image);

    imgContainer.appendChild(image);

    card.appendChild(imgContainer);

    var container = document.createElement("div");
    container.classList.add("container");

    var mName = document.createElement("h4");
    mName.classList.add("mobile-name");
    mName.innerText = i.mobileName.toUpperCase();
    container.appendChild(mName);

    var memory = document.createElement("h5");
    memory.innerText = "RAM " + i.ram + " " + "ROM " + i.memory;
    container.appendChild(memory);

    var color = document.createElement("h5");
    color.innerText = i.color;
    container.appendChild(color);

    var price = document.createElement("h5");
    price.innerText = "Rs " + i.price;
    container.appendChild(price);

    card.appendChild(container);

    document.getElementById("mobile").appendChild(card);
});




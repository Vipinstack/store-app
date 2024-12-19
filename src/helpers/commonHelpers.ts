import axios from "axios";
import config from "../config/config";
declare var window: any;
declare var document: any;
const cssArray: Array<any> = [];
const jsArray: Array<any> = [];
declare var Swiper: any;

class CommonServices {
  private apiUrl(url: any) {
    return typeof window !== "undefined"
      ? config.BASE_URL + url
      : config.SERVER_BASE_URL + url;
  }

  public async getData(url: any, headers: any = {}) {
    try {
      if (typeof window != "undefined" && url.match(/\/api\/sso\/.*/i)) {
        let token = this.getLocalStorage("csmUToken");
        if (headers != null && "headers" in headers)
          headers["Authorization"] = "bearer " + token;
        else
          headers = { "headers": { "Authorization": "bearer " + token } };
      }
      const apiUrl: any = this.apiUrl(url);

      return await axios.get(apiUrl, headers);
      
    } catch (err: any) {
      console.log(err.message);
      throw err;
      // throw new Error(err?.message);
    }
  }

  public async getServerData(url: any, headers: any = {}) {
    try {
      return await axios.get(url, {
        headers: headers,
      });
    } catch (err: any) {
      throw new Error(err?.message);
    }
  }

  public postData(url: string, reqParam: any, headers: any) {
    return axios.post(url, reqParam, headers);
}

  public siteLogo() {
    return `${config.RESOURCE_PATH}2020-12/blackHeader.png`;
  }

  public scrollToTop() {
    window.scrollTo(0, 0);
  }

  public getUrlParam(slug: any) {
    const id = slug.split("-");
    return id[id.length - 4];
  }

  private getFileId(url: any) {
    return url.split("/").pop().replace(/\./g, "") + "Id";
  }

  private checkHttpUrl(url: any) {
    return /^http(s)?:\/\//i.test(url) ? true : false;
  }

  public addCss(fileName: string) {
    let fileId = this.getFileId(fileName);
    if (cssArray.indexOf(fileId) < 0) {
      cssArray.push(fileId);
      let css = document.createElement("link");
      css.id = fileId;
      css.rel = "stylesheet";
      css.type = "text/css";
      css.href =
        (this.checkHttpUrl(fileName)
          ? fileName
          : config.RESOURCE_PATH + "css/" + fileName + ".css") +
        "?ver=" +
        config.RES_VER;
      document.head.appendChild(css);
    }
  }


  public addUrlDocument(file: string) {
    let css = document.createElement("link");
    css.rel = "stylesheet";
    css.href = this.checkHttpUrl(file)
      ? file
      : config.RESOURCE_PATH + "css/" + file + ".css";
    document.head.appendChild(css);
  }

  private checkExternalJs(url: any) {
    return /\/\/akm-img-a-in.tosshub.com/i.test(url) ? false : true;
  }

  public setObserverElm(selector: any, unobser: boolean = false, callBack: any, thresholdVal: number = 0.7, notVisibleCB: any = null) {
    setTimeout(() => {
      if (typeof window !== "undefined" && window.IntersectionObserver && selector !== null) {
        let observeObj: any =
          typeof selector == "object" ? [selector] : document.querySelectorAll("." + selector);
        if (observeObj.length > 0) {
          let observer = new IntersectionObserver((entries, observer) => {
              entries.forEach((entry) => {
                if (entry.isIntersecting) {
                  callBack(entry.target);
                  if (unobser) observer.unobserve(entry.target);
                } else if (notVisibleCB != null) {
                  notVisibleCB(entry);
                }
              });
            },
            { threshold: thresholdVal }
          );
          observeObj.forEach((item: any) => {
            observer.observe(item);
          });
          window.addEventListener("popstate", function (event: any) {
            observeObj.forEach((item: any) => {
              observer.unobserve(item);
            });
          });
        }
      }
    }, 100);
  }

  public addJs(fileName: string, callback: any = null, fileId: any = null, setTime: number = 0, defer: boolean = false) {
    fileId = fileId == null ? this.getFileId(fileName) : fileId;
    if (jsArray.indexOf(fileId) < 0) {
      jsArray.push(fileId);
      let s = document.createElement("script");
      s.id = fileId;
      s.type = "text/javascript";
      if (defer) s.defer = true;
      else s.async = true;
      s.src = this.checkHttpUrl(fileName)
        ? fileName +
        (this.checkExternalJs(fileName) ? "" : "?ver=" + config.RES_VER)
        : config.RESOURCE_PATH + "js/" + fileName + ".js?ver=" + config.RES_VER;
      s.onload = function () {
        if (callback != null) {
          setTimeout(() => {
            callback("load");
          }, 200);
        }
      };
      setTimeout(() => {
        document.body.appendChild(s);
      }, setTime);
    } else if (callback != null) {
      setTimeout(() => {
        callback("loaded");
      }, 200);
    }
  }

  public addSwiper(config: any) {
    this.addJs(
      `swiper`,
      () => {
        if (config.breakpoints) {
          const swiper: any = new Swiper(`${config.initialClass}`, {
            slidesPerView: config.slidesPerView,
            spaceBetween: 30,
            navigation: {
              nextEl: ".swiper-button-next",
              prevEl: ".swiper-button-prev",
            },
            pagination: {
              el: ".swiper-pagination",
              clickable: true,
            },
            breakpoints: config.breakpoints,
          });
        } else {
          const swiper: any = new Swiper(`${config.initialClass}`, {
            // spaceBetween: 10,
            navigation: {
              nextEl: ".swiper-button-next",
              prevEl: ".swiper-button-prev",
            },
            pagination: {
              el: ".swiper-pagination",
              clickable: true,
            },
          });
        }
      },
      config.swiperClass
    );
  }

  public getJsCookie(name: string) {
    if (typeof window != "undefined") {
      let ca: Array<string> = document.cookie.split(';');
      let cookieName = `${name}=`;
      let c: string;
      for (let i: number = 0; i < ca.length; i += 1) {
        c = ca[i].replace(/^\s+/g, '');
        if (c.indexOf(cookieName) == 0) {
          let cookVal = c.substring(cookieName.length, c.length);
          return cookVal != "null" && cookVal != "undefined" ? cookVal : false;
        }
      }
      return false;
    }
  }

  public clearSessStorage(name: string) {
    sessionStorage.removeItem(name);
  }

  public clearLocalStorage(name: string) {
    localStorage.removeItem(name);
  }

  public getSessStorage(name: string) {
    if (typeof window != "undefined") {
      try {
        let item = sessionStorage.getItem(name);
        return item ? JSON.parse(item) : null;
      }
      catch (err: any) {
      }
    }
    return null;
  }

  public getLocalStorage(name: string) {
    if (typeof window != "undefined") {
      try {
        let item = localStorage.getItem(name);
        return item ? JSON.parse(item) : null;
      }
      catch (err: any) {
      }
    }
    return null;
  }

  public emptyObj(obj: any) {
    return (obj && Object.keys(obj).length === 0 && Object.getPrototypeOf(obj) === Object.prototype) ? true : false;
  }

  public setSessStorage(name: string, value: any) {
    if (typeof window != "undefined" && value != null) {
      sessionStorage.setItem(name, !this.emptyObj(value) ? JSON.stringify(value) : value);
    }
  }

  public delCookie(name: string) {
    if (typeof window != "undefined") {
      document.cookie = name + '=; Path=/; Expires=Thu, 01 Jan 1970 00:00:01 GMT;';
    }
  }

  public setLocalStorage(name: string, value: any) {
    if (typeof window != "undefined" && value != null) {
      localStorage.setItem(name, !this.emptyObj(value) ? JSON.stringify(value) : value);
    }
  }

  //   public runScript = (section: any) => {
  //     const script = document.createElement('script');
  //     script.type = 'text/javascript';
  //     script.innerHTML = `
  //         $(document).ready(() => {
  //           searchInit("fashion");
  //         });
  //       `;
  //       document.body.appendChild(script);
  //  };
  public isJson(str: any) {
    try { return JSON.parse(str); } catch (e) { return false; }
  }
  
  public isEmptyObject(obj: any) {

		for (var key in obj) {
			if (Object.prototype.hasOwnProperty.call(obj, key)) {
				return false;
			}
		}
		return true;
	}

	public isEmpty(val: any) {
		return (val != '' && val != undefined ? false : true);
	}

	public isKeyEmpty (key: any, obj: any) {
		if (!Array.isArray(key)) {
			key[0] = key;
		}
		key.forEach((elm: any) => {
			if (elm in obj && this.isEmpty(obj[elm]))
				return true;
		});
		return false;
	}
}

export const Common = new CommonServices();

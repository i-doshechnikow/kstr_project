import axios from "axios";

const instance = axios.create({
  withCredentials: true,
  baseURL: "https://social-network.samuraijs.com/api/1.0/",
  headers: {
    "API-KEY": "234cc3be-73fc-42c6-9994-80baa9a4fe68",
  },
});

export enum ResultCodesEnum {
  Success = 0,
  Error = 1,
}
export enum ResultCodesWithCaptchaEnum {
  CuptchaIsRequired = 10,
}

type InnerData = {
  id: number;
  email: string;
  login: string;
};

type GetIsAuthType = {
  data: InnerData;
  resultCode: ResultCodesEnum | ResultCodesWithCaptchaEnum;
  messages: Array<string>;
};

export const userApi = {
  getIsAuth() {
    return instance.get<GetIsAuthType>(`auth/me`).then((response) => {
      return response.data;
    });
  },
  getUsers(pageNumber = 1, pageSize = 5) {
    return instance
      .get(`users?page=${pageNumber}&count=${pageSize}`)
      .then((response) => {
        return response.data;
      });
  },
  getUserInfo(id: number) {
    console.warn("Obsolete method. Use profileApi object");
    return profileApi.getUserInfo(id);
  },
  onFollowClick(id: number) {
    return instance.post(`follow/${id}`).then((response) => {
      return response.data;
    });
  },
  onUnfollowClick(id: number) {
    return instance.delete(`follow/${id}`).then((response) => {
      return response.data;
    });
  },
};

export const profileApi = {
  getUserInfo(id: number) {
    return instance.get(`profile/${id}`).then((response) => {
      return response.data;
    });
  },
  getStatus(id: number) {
    return instance
      .get(`profile/status/${id}`)
      .then((response) => response.data);
  },
  updateStatus(string: string) {
    return instance.put(`profile/status`, {
      status: string,
    });
  },
  updateProfilePhoto(photo: string) {
    const formData = new FormData();
    formData.append("image", photo);
    return instance.put(`profile/photo`, formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
  },

  updateAbout(info: any) {
    return instance.put(`profile`, {
      aboutMe: "about you?",
      lookingForAJob: info.lfaj,
      lookingForAJobDescription: info.skills,
      fullName: info.fullName,
      contacts: {
        github: info.github,
      },
    });
  },
};

export const securityAPI = {
  getCaptcha() {
    return instance.get(`/security/get-captcha-url`);
  },
};

type AuthLoginType = {
  resultCode: ResultCodesWithCaptchaEnum | ResultCodesEnum;
  data: { userId: number };
  messages: Array<string>;
};

export const testAuthApi = {
  authTest(
    login: string,
    password: string,
    rememberMe: boolean,
    captcha: null | string
  ) {
    return instance
      .post<AuthLoginType>(`auth/login`, {
        email: login,
        password: password,
        rememberMe: rememberMe,
        captcha: captcha,
      })
      .then((res) => res.data);
  },
  logout() {
    return instance.delete(`auth/login`).then((res) => res.data);
  },
};

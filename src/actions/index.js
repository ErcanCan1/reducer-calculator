export const ADD_ONE = "ADD_ONE";

export const APPLY_NUMBER = "APPLY_NUMBER";
export const CHANGE_OPERATION = "CHANGE_OPERATION";
export const CLEAR_DISPLAY = "Ekranı Temizle";
export const MEMORY_TOPLAM = "Son değer kaydı";
export const MEMORY_TOTAL = "Son değerle yeni değeri topla";
export const MEMORY_CLEAR = "Hafızayı Sıfırla";
export const addOne = () => {
  return ({ type: ADD_ONE });
}

export const applyNumber = (number) => {
  return ({ type: APPLY_NUMBER, payload: number });
}
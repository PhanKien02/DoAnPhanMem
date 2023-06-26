import request from "../../../configs/httpRequesr";

const getAllNhanVien = async () => {
    try {
        const response = await request.get("nhanviens");
        return response.data;
    } catch (error) {console.log(error);}
};
const getNhanVienById = async (id) => {
    try {
        const response = await request.get(`/nhanvien?id=${id}`);
        return response.data;
    } catch (error) {console.log(error);}
};
const addNhanVien = async () => {
    try {
        const response = await request.get("nhanviens");
        return response.data;
    } catch (error) {console.log(error);}
};
const updateNhanVien = async () => {
    try {
        const response = await request.get("nhanviens");
        return response.data;
    } catch (error) {console.log(error);}
};
const deleteNhanVien = async () => {
    try {
        const response = await request.get("nhanviens");
        return response.data;
    } catch (error) {console.log(error);}
};

export default { getAllNhanVien,getNhanVienById,addNhanVien,deleteNhanVien,updateNhanVien}

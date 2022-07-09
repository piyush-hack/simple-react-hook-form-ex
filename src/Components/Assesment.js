import React from 'react'
import { useForm } from "react-hook-form";
import { toast, ToastContainer } from "react-toastify";

const Assesment = () => {
    const InvalidClass = {
        borderColor: "#dc3545",
        paddingRight: "calc(1.5em + 0.75rem)",
        backgroundImage:
            "url(data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 12 12' width='12' height='12' fill='none' stroke='%23dc3545'%3e%3ccircle cx='6' cy='6' r='4.5'/%3e%3cpath stroke-linejoin='round' d='M5.8 3.6h.4L6 6.5z'/%3e%3ccircle cx='6' cy='8.2' r='.6' fill='%23dc3545' stroke='none'/%3e%3c/svg%3e)",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "right calc(0.375em + 0.1875rem) center",
        backgroundAize: "calc(0.75em + 0.375rem) calc(0.75em + 0.375rem)",
        position: "relative"
    };

    const {
        register,
        handleSubmit,
        formState: { errors },
        trigger,
    } = useForm();

    const onSubmit = (data, e) => {
        handleFormSubmit(data)
    };
    const onError = (errors, e) => console.log(errors, e);

    const handleFormSubmit = async (data) => {
        try {

        } catch (error) {
            if (error.response && error.response.status === 400) {
                toast.error(error.response.data, {
                    position: "bottom-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                });
            }
        }
    };


    return (
        <div className="vh-100 bg-grey1 mv-bg-white">
            <ToastContainer />
            <div className="vh-100 d-flex align-items-center">
                <section className=" col-md-4 p-5 bg-white m-auto  mv-w-100 mv-vh-75 mv-bs-none" style={{ boxShadow: '0 4px 12px 0 rgba(0,0,0,.07),0 2px 4px rgba(0,0,0,.05)' }}>
                    <form onSubmit={handleSubmit(onSubmit, onError)}>
                        <h4 className='fw-bold text-align-center mb-3 text-align-center'>Start the signup .</h4>

                        <div className="form-outline  mb-2">
                            <label className="form-label" htmlFor="colFormLabelLg">Username</label>
                            <input style={errors.name && InvalidClass} name="name" type="text" className="form-control form-control-lg" id="colFormLabelLg1"
                                {...register("name", {
                                    required: "Name is Required",
                                })}
                                onKeyUp={() => {
                                    trigger("name");
                                }}
                            />
                            {errors.name && (
                                <small className="text-danger">{errors.name.message}</small>
                            )}
                        </div>

                        <div className="form-outline   mb-2">
                            <label className="form-label" htmlFor="colFormLabelLg">Email  </label>
                            <input style={errors.email && InvalidClass} name="email" type="text" className="form-control form-control-lg" id="colFormLabelLg1"
                                {...register("email", {
                                    required: "Email is Required",
                                    pattern: {
                                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                        message: "Invalid email address",
                                    },
                                })}
                                onKeyUp={() => {
                                    trigger("email");
                                }}
                            />
                            {errors.email && (
                                <small className="text-danger">{errors.email.message}</small>
                            )}
                        </div>
                        <div className="form-outline   my-3 mb-0">
                            <div className="form-outline   mb-0">
                                <label className="form-label" htmlFor="colFormLabelLg">Mobile No.</label>
                                <input style={errors.phone && InvalidClass} name="number" type="text" className="form-control form-control-lg" id="colFormLabelLg1"
                                    {...register("phone", {
                                        required: "Phone is Required",
                                    })}
                                    onKeyUp={() => {
                                        trigger("phone");
                                    }}
                                />
                                {errors.phone && (
                                    <small className="text-danger">{errors.phone.message}</small>
                                )}
                            </div>
                        </div>

                        <div className="form-outline   my-3 mb-0">
                            <div className="form-outline   mb-0">
                                <label className="form-label" htmlFor="colFormLabelLg">Country</label>
                                <input style={errors.country && InvalidClass} name="text" type="text" className="form-control form-control-lg" id="colFormLabelLg1"
                                    {...register("country")}
                                    onKeyUp={() => {
                                        trigger("country");
                                    }}
                                />
                                {errors.country && (
                                    <small className="text-danger">{errors.country.message}</small>
                                )}
                            </div>
                        </div>

                        <div className="form-outline   my-3 mb-0">
                            <div className="form-outline   mb-0">
                                <label className="form-label" htmlFor="colFormLabelLg">City</label>
                                <input style={errors.city && InvalidClass} name="text" type="text" className="form-control form-control-lg" id="colFormLabelLg1"
                                    {...register("city", {
                                        required: "City is Required",
                                    })}
                                    onKeyUp={() => {
                                        trigger("city");
                                    }}
                                />
                                {errors.city && (
                                    <small className="text-danger">{errors.city.message}</small>
                                )}
                            </div>
                        </div>

                        <br />
                        <button type="submit" className="btn btn-primary btn-lg btn-block bg-sec-blue box-shadow-none">Next</button>
                    </form>
                </section>
            </div>
        </div>
    )
}

export default Assesment

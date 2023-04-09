import { useForm } from "react-hook-form"

export function  Form() {

  const { register, handleSubmit, formState: {errors} } = useForm()

  const onSubmit = (data) => {
    console.log(JSON.stringify(data));
  }

  return (
    <section className={`flex flex-col `}
        data-aos="fade-up"
    >
        <h2 className="mb-2 text-blue-400 text-center text-2xl font-bold sm:text-left mt-7 ">
            #Entre em contato
        </h2>
        <div>
            <form
                className={`flex flex-col mx-4 `}
                >
                <div
                    className={`flex items-center justify-center flex-col gap-2 sm:flex-row mb-2`}
                >
                    <input  
                        type="text" 
                        placeholder="Digite seu nome"
                        {...register("name",{required: true})}
                        className={`
                            outline-none bg-blue-700 py-2 px-4 rounded-lg w-full
                            focus:border-2 focus:border-blue-900
                            ${errors?.name ? " border-red-700" : ""} 
                        `}
                    />
                    <input 
                        type="email" 
                        placeholder="Digite seu e-mail"
                        {...register("email")}
                        className={`
                            outline-none bg-blue-700 py-2 px-4 rounded-lg w-full
                            focus:border-2 focus:border-blue-900
                        `}
                    />
                </div>
                <textarea 
                    rows={3}
                     className={`
                        outline-none bg-blue-700 py-2 px-4 rounded-lg w-full
                        focus:border-2 focus:border-blue-900 resize-none
                    `}
                    {...register("textarea")}
                    placeholder="Digite uma mensagem"></textarea>
                <button 
                    onClick={() => handleSubmit(onSubmit)()}
                    className={`
                        mt-2 ease-in duration-300 p-3 bg-slate-600 hover:text-gray-300 hover:bg-slate-700
                        rounded-lg text-white w-20
                    `}
                >Enviar</button>
            </form>
        </div>
    </section>
  );
}

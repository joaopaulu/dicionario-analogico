import {AxiosRequestConfig} from 'axios';
//import { Dependency } from 'core/types/dependency';
//import { Tematic } from 'core/types/tematic';
import {Verbet} from 'core/types/verbet';
import {requestBackend} from 'core/utils/requests';
import {useEffect} from 'react';
import {useForm} from 'react-hook-form';
import {useHistory} from 'react-router';
import {useParams} from 'react-router-dom';
import {toast} from 'react-toastify';
import './styles.css';

type UrlParams = {
    verbetId: string;
};

const Form = () => {
    const {verbetId} = useParams<UrlParams>();
    const isEditing = verbetId !== 'create';
    const history = useHistory();
    // const [selectDependency, setSelectDependency] = useState<Dependency[]>([]);
    // const [selectTematic, setSelectTematics] = useState<Tematic[]>([]);

    const {
        register,
        handleSubmit,
        formState: {errors},
        setValue,
    } = useForm<Verbet>();
    /*
    useEffect(() => {
      requestBackend({ url: '/tematics' }).then(response => {
        setSelectDependency(response.data.content);
      });
    }, []);

    useEffect(() => {
      requestBackend({ url: '/dependencies' }).then(response => {
        setSelectDependency(response.data.content);
      });
    }, []);
  */
    useEffect(() => {
        if (isEditing) {
            requestBackend({url: `/verbetes/${verbetId}`}).then(response => {
                const verbet = response.data as Verbet;
                setValue('descricao', verbet.descricao);
                setValue('separacaoSilabica', verbet.separacaoSilabica);
                setValue('pronuncia', verbet.pronuncia);
                setValue('genero', verbet.genero);
                setValue('transitividadeVerbal', verbet.transitividadeVerbal);
                setValue('definicao', verbet.definicao);
                setValue('fonteDefinicao', verbet.fonteDefinicao);
                setValue('variantes', verbet.variantes);
                setValue('abvFonteContexto', verbet.abvFonteContexto);
                setValue('notas', verbet.notas);
            });
        }
    }, [isEditing, verbetId, setValue]);

    const onSubmit = (formData: Verbet) => {
        const data = {
            ...formData,
        };
        const config: AxiosRequestConfig = {
            method: isEditing ? 'PUT' : 'POST',
            url: isEditing ? `/verbetes/${verbetId}` : '/verbets',
            data,
            withCredentials: true,
        };

        requestBackend(config)
            .then(() => {
                toast.info('Registro cadastrado com sucesso');
                history.push('/admin/verbets');
            })
            .catch(() => {
                toast.error('Erro ao cadastrar');
            });
    };

    const handleCancel = () => {
        history.push('/admin/verbets');
    };

    return (
        <div className="verbet-crud-container">
            <div className="base-card verbet-crud-form-card">
                <h1 className="verbet-crud-form-title">DADOS DO VERBETE</h1>

                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="row verbet-crud-inputs-container">
                        <div className="col-lg-6 verbet-crud-inputs-left-container">
                            <div className="margin-bottom-30">
                                <input
                                    {...register('descricao', {
                                        required: 'Campo obrigatório',
                                    })}
                                    type="text"
                                    className={`form-control base-input ${
                                        errors.descricao ? 'is-invalid' : ''
                                    }`}
                                    placeholder="Descrição"
                                    name="descricao"
                                />
                                <div className="invalid-feedback d-block">
                                    {errors.descricao?.message}
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 verbet-crud-inputs-left-container">
                            <div className="margin-bottom-30">
                                <input
                                    {...register('separacaoSilabica', {
                                        required: 'Campo obrigatório',
                                    })}
                                    type="text"
                                    className={`form-control base-input ${
                                        errors.separacaoSilabica ? 'is-invalid' : ''
                                    }`}
                                    placeholder="Separação Silabica"
                                    name="separacaoSilabica"
                                />
                                <div className="invalid-feedback d-block">
                                    {errors.separacaoSilabica?.message}
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 verbet-crud-inputs-left-container">
                            <div className="margin-bottom-30">
                                <input
                                    {...register('pronuncia', {
                                        required: 'Campo obrigatório',
                                    })}
                                    type="text"
                                    className={`form-control base-input ${
                                        errors.pronuncia ? 'is-invalid' : ''
                                    }`}
                                    placeholder="Pronuncia"
                                    name="pronuncia"
                                />
                                <div className="invalid-feedback d-block">
                                    {errors.pronuncia?.message}
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-6 verbet-crud-inputs-left-container">
                            <div className="margin-bottom-30">
                                <input
                                    {...register('genero', {
                                        required: 'Campo obrigatório',
                                    })}
                                    type="text"
                                    className={`form-control base-input ${
                                        errors.genero ? 'is-invalid' : ''
                                    }`}
                                    placeholder="Genero"
                                    name="genero"
                                />
                                <div className="invalid-feedback d-block">
                                    {errors.genero?.message}
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-12 verbet-crud-inputs-left-container">
                            <div className="margin-bottom-30">
                            <textarea
                                rows={10}
                                {...register('definicao', {
                                    required: 'Campo obrigatório',
                                })}
                                className={`form-control base-input h-auto ${
                                    errors.definicao ? 'is-invalid' : ''
                                }`}
                                placeholder="Definição"
                                name="definicao"
                            ></textarea>
                                <div className="invalid-feedback d-block">
                                    {errors.definicao?.message}
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 verbet-crud-inputs-left-container">
                            <div className="margin-bottom-30">
                                <input
                                    {...register('fonteDefinicao', {
                                        required: 'Campo obrigatório',
                                    })}
                                    type="text"
                                    className={`form-control base-input ${
                                        errors.fonteDefinicao ? 'is-invalid' : ''
                                    }`}
                                    placeholder="Fonte Definição"
                                    name="fonteDefinicao"
                                />
                                <div className="invalid-feedback d-block">
                                    {errors.fonteDefinicao?.message}
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 verbet-crud-inputs-left-container">
                            <div className="margin-bottom-30">
                                <input
                                    {...register('variantes', {
                                        required: 'Campo obrigatório',
                                    })}
                                    type="text"
                                    className={`form-control base-input ${
                                        errors.variantes ? 'is-invalid' : ''
                                    }`}
                                    placeholder="Variantes"
                                    name="variantes"
                                />
                                <div className="invalid-feedback d-block">
                                    {errors.variantes?.message}
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 verbet-crud-inputs-left-container">
                            <div className="margin-bottom-30">
                                <input
                                    {...register('abvFonteContexto', {
                                        required: 'Campo obrigatório',
                                    })}
                                    type="text"
                                    className={`form-control base-input ${
                                        errors.abvFonteContexto ? 'is-invalid' : ''
                                    }`}
                                    placeholder="Abreviação Fonte Contexo"
                                    name="abvFonteContexo"
                                />
                                <div className="invalid-feedback d-block">
                                    {errors.abvFonteContexto?.message}
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 verbet-crud-inputs-left-container">
                            <div className="margin-bottom-30">
                                <input
                                    {...register('notas', {
                                        required: 'Campo obrigatório',
                                    })}
                                    type="text"
                                    className={`form-control base-input ${
                                        errors.notas ? 'is-invalid' : ''
                                    }`}
                                    placeholder="Notas"
                                    name="notas"
                                />
                                <div className="invalid-feedback d-block">
                                    {errors.notas?.message}
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="verbet-crud-buttons-container">
                        <button
                            className="btn btn-outline-danger verbet-crud-button"
                            onClick={handleCancel}
                        >
                            CANCELAR
                        </button>
                        <button className="btn btn-primary verbet-crud-button text-white">
                            SALVAR
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Form;

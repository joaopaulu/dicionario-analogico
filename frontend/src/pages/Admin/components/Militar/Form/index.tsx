import { Arma } from 'core/types/Arma';
import { Militar } from 'core/types/Militar';
import { Om } from 'core/types/Om';
import { Posto } from 'core/types/Posto';
import { makePrivateRequest } from 'core/utils/request';
import { useEffect, useState } from 'react';
import { Controller, useForm } from 'react-hook-form';
import { useHistory, useParams } from 'react-router-dom';
import Select from 'react-select';
import { toast } from 'react-toastify';
import BaseForm from '../../BaseForm';
import './styles.scss';

export type FormState = {
  nomeCompleto: string;
  nomeGuerra: string;
  idtMilitar: string;
  apresentacao: string;
  turma: string;
  omAtual: Om;
  omFutura: Om;
  armas: Arma;
  postos: Posto;
};

type ParamsType = {
  militarId: string;
};

const Form = () => {
  const { register, handleSubmit, errors, setValue, control } =
    useForm<Militar>();

  const history = useHistory();
  const { militarId } = useParams<ParamsType>();

  const [oms, setOms] = useState<Om>();
  const [isLoadingOms, setIsLoadingOms] = useState(false);

  const [armas, setArmas] = useState<Arma>();
  const [isLoadingArmas, setIsLoadingArmas] = useState(false);

  const [postos, setPostos] = useState<Posto>();
  const [isLoadingPostos, setIsLoadingPostos] = useState(false);

  const isEditing = militarId !== 'create';
  const formTitle = isEditing ? 'editar militar' : 'cadastrar um Militar';

  useEffect(() => {
    if (isEditing) {
      makePrivateRequest({ url: `/militares/${militarId}` }).then(response => {
        setValue('nomeCompleto', response.data.nomeCompleto);
        setValue('nomeGuerra', response.data.nomeGuerra);
        setValue('idtMilitar', response.data.idtMilitar);
        setValue('apresentacao', response.data.apresentacao);
        setValue('turma', response.data.turma);
        setValue('omAtual', response.data.omAtual);
        setValue('omFutura', response.data.omFutura);
        setValue('armas', response.data.armas);
        setValue('postos', response.data.postos);
      });
    }
  }, [militarId, isEditing, setValue]);

  useEffect(() => {
    setIsLoadingOms(true);
    makePrivateRequest({ url: '/oms' })
      .then(response => setOms(response.data.content))
      .finally(() => setIsLoadingOms(false));
  }, []);

  useEffect(() => {
    setIsLoadingArmas(true);
    makePrivateRequest({ url: '/armas?page=0&linesPerPage=19&orderBy=id' })
      .then(response => setArmas(response.data.content))
      .finally(() => setIsLoadingArmas(false));
  }, []);

  useEffect(() => {
    setIsLoadingPostos(true);
    makePrivateRequest({ url: '/postos?page=0&linesPerPage=32' })
      .then(response => setPostos(response.data.content))
      .finally(() => setIsLoadingPostos(false));
  }, []);

  const onSubmit = (data: Militar) => {
    console.log(data);
    makePrivateRequest({
      url: isEditing ? `/militares/${militarId}` : '/militares',
      method: isEditing ? 'PUT' : 'POST',
      data,
    })
      .then(() => {
        toast.info('Militar salvo com sucesso!');
        history.push('/admin/militares');
      })
      .catch(() => {
        toast.error('Erro ao salvar militares!');
      });
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <BaseForm title={formTitle}>
        <div className="row">
          <div className="col-6">
            <div className="input-bt30">
              <Controller
                as={Select}
                name="postos"
                rules={{ required: false }}
                control={control}
                isLoading={isLoadingPostos}
                options={postos}
                getOptionLabel={(option: Posto) => option.sigla}
                getOptionValue={(option: Posto) => String(option.id)}
                classNamePrefix="input-select"
                placeholder="Posto"
                inputId="postos"
                defaultValue=""
              />
            </div>
          </div>
          <div className="col-6">
            <div className="input-bt30">
              <Controller
                as={Select}
                name="armas"
                rules={{ required: false }}
                control={control}
                isLoading={isLoadingArmas}
                options={armas}
                getOptionLabel={(option: Arma) => option.descricao}
                getOptionValue={(option: Arma) => String(option.id)}
                classNamePrefix="input-select"
                placeholder="Arma"
                inputId="armas"
                defaultValue=""
              />
            </div>
          </div>
          <div className="col-12">
            <div className="input-bt30">
              <input
                ref={register({
                  required: 'Campo obrigatório',
                  minLength: {
                    value: 3,
                    message: 'O campo deve ter no mínimo 3 caracteres',
                  },
                  maxLength: {
                    value: 100,
                    message: 'O campo deve ter no máximo 100 caracteres',
                  },
                })}
                type="text"
                name="nomeCompleto"
                className="form-control input-base"
                placeholder="Nome Completo"
              />
              {errors.nomeCompleto && (
                <div className="invalid-feedback d-block">
                  {errors.nomeCompleto.message}
                </div>
              )}
            </div>
          </div>
          <div className="col-6">
            <div className="input-bt30">
              <input
                ref={register({
                  required: 'Campo obrigatório',
                  minLength: {
                    value: 3,
                    message: 'O campo deve ter no mínimo 3 caracteres',
                  },
                  maxLength: {
                    value: 60,
                    message: 'O campo deve ter no máximo 60 caracteres',
                  },
                })}
                type="text"
                name="nomeGuerra"
                className="form-control input-base"
                placeholder="Nome de Guerra"
              />
              {errors.nomeGuerra && (
                <div className="invalid-feedback d-block">
                  {errors.nomeGuerra.message}
                </div>
              )}
            </div>
          </div>
          <div className="col-6">
            <div className="input-bt30">
              <input
                ref={register({
                  required: 'Campo obrigatório',
                  minLength: {
                    value: 8,
                    message: 'O campo deve ter no mínimo 11 caracteres',
                  },
                  maxLength: {
                    value: 15,
                    message: 'O campo deve ter no máximo 15 caracteres',
                  },
                })}
                type="number"
                name="idtMilitar"
                className="form-control input-base"
                placeholder="Identidade Militar"
              />
              {errors.idtMilitar && (
                <div className="invalid-feedback d-block">
                  {errors.idtMilitar.message}
                </div>
              )}
            </div>
          </div>
          <div className="col-6">
            <div className="input-bt30">
              <input
                ref={register}
                type="date"
                name="apresentacao"
                className="form-control input-base"
                placeholder="Apresentação"
              />
            </div>
          </div>
          <div className="col-6">
            <div className="input-bt30">
              <input
                ref={register}
                type="number"
                name="turma"
                className="form-control input-base"
                placeholder="Ano da Turma"
              />
            </div>
          </div>
          <div className="col-6">
            <div className="input-bt30">
              <Controller
                as={Select}
                name="omAtual"
                rules={{ required: false }}
                control={control}
                isLoading={isLoadingOms}
                options={oms}
                getOptionLabel={(option: Om) => option.descricao}
                getOptionValue={(option: Om) => String(option.id)}
                classNamePrefix="input-select"
                placeholder="OM Atual"
                inputId="omAtual"
                defaultValue=""
              />
            </div>
          </div>
          <div className="col-6">
            <div className="input-bt30">
              <Controller
                as={Select}
                name="omFutura"
                rules={{ required: false }}
                control={control}
                isLoading={isLoadingOms}
                options={oms}
                getOptionLabel={(option: Om) => option.descricao}
                getOptionValue={(option: Om) => String(option.id)}
                classNamePrefix="input-select"
                placeholder="OM Futura"
                inputId="omFutura"
                defaultValue=""
              />
            </div>
          </div>
        </div>
      </BaseForm>
    </form>
  );
};

export default Form;

import { MapPinLine } from "phosphor-react";
import { HeaderTitle } from "../HeaderTitle";
import { AddressContainer, Column, FormContainer, Input } from "./styles";
import { zodResolver } from '@hookform/resolvers/zod';
import * as zod from 'zod';
import { useForm } from "react-hook-form";
import { useContext, useEffect } from "react";
import { DeliveryAddress, OrderContext } from "../../../../contexts/OrderContext";

const addressFormValidationSchema = zod.object({
  cep: zod.string().min(8).max(9),
  rua: zod.string().min(1),
  numero: zod.string().min(1),
  complemento: zod.string(),
  bairro: zod.string().min(1),
  cidade: zod.string().min(1),
  uf: zod.string().min(2),
});

type NewAddressFormData = zod.infer<typeof addressFormValidationSchema>;

export function Address() {
  const {
    updateOrderAddress,
  } = useContext(OrderContext);

  const addressForm = useForm<NewAddressFormData>({
    resolver: zodResolver(addressFormValidationSchema),
    defaultValues: {
      cep: '',
      rua: '',
      numero: '',
      complemento: '',
      bairro: '',
      cidade: '',
      uf: '',
    },
    mode: 'onChange'
  })

  const { register, handleSubmit, setValue, getValues, formState: { errors, isValid } } = addressForm;

  useEffect(() => {
    if (isValid === false) {
      handleDeliveryAddressFilled({} as NewAddressFormData);
      return;
    } else {
      handleSubmit(handleDeliveryAddressFilled)();
    }
  }, [isValid])

  function handleDeliveryAddressFilled(address: NewAddressFormData) {
    updateOrderAddress(address);
  }

  function handleSearchCep() {
    const cep = getValues('cep').replace('-', '');
    if ((/^\d+$/.test(cep) === true) && (cep.length === 8)) {
      fetch(`https://viacep.com.br/ws/${cep}/json/`)
        .then((response) => {
          return response.json();
        })
        .then((data) => {
          setValue('rua', data.logradouro || '');
          setValue('complemento', data.complemento || '');
          setValue('bairro', data.bairro || '');
          setValue('cidade', data.localidade || '');
          setValue('uf', data.uf || '');
        },
        )
        .catch((error) => {

        });
    }
  }

  return (
    <AddressContainer>
      <HeaderTitle
        icon={<MapPinLine size={22} />}
        iconColor={'yellowDark'}
        title={'Endereço de Entrega'}
        subtitle={'Informe o endereço onde deseja receber seu pedido'}
      />
      <FormContainer>
        <div>
          <Column numGrid={39}>
            <Input
              type="text"
              placeholder="CEP"
              {...register('cep')}
              onBlur={handleSearchCep}
            />
          </Column>
        </div>
        <div>
          <Column numGrid={100}>
            <Input
              type="text"
              placeholder="Rua"
              {...register('rua')}
            />
          </Column>
        </div>
        <div>
          <Column numGrid={40}>
            <Input
              type="text"
              placeholder="Número"
              {...register('numero')}
            />
          </Column>
          <Column numGrid={60}>
            <Input
              type="text"
              placeholder="Complemento (opcional)"
              {...register('complemento')}
            />
          </Column>
        </div>
        <div>
          <Column numGrid={42}>
            <Input
              type="text"
              placeholder="Bairro"
              {...register('bairro')}
            />
          </Column>
          <Column numGrid={40}>
            <Input
              type="text"
              placeholder="Cidade"
              {...register('cidade')}
            />
          </Column>
          <Column numGrid={20}>
            <Input
              type="text"
              placeholder="UF"
              {...register('uf')}
            />
          </Column>
        </div>
      </FormContainer>
    </AddressContainer>
  );
}
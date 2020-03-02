import React from 'react';
import { MdAddShoppingCart } from 'react-icons/md';
import { ProductList } from './styles';

export default function Home() {
  return (
    <ProductList>
      <li>
        <img
          src="https://imgcentauro-a.akamaihd.net/900x900/M02ZFU02/tenis-feminino-preto-torani-com-glitter-img.jpg"
          alt="tenis"
        />
        <strong>
          Tênis legal porem tem o titulo maceta seu mano, olha ja a pavulagem
        </strong>
        <span>R$129.90</span>

        <button>
          <div>
            <MdAddShoppingCart size={16} color="#fff" />3
          </div>
          <span>ADICIONAR</span>
        </button>
      </li>

      <li>
        <img
          src="https://imgcentauro-a.akamaihd.net/900x900/M02ZFU02/tenis-feminino-preto-torani-com-glitter-img.jpg"
          alt="tenis"
        />
        <strong>Tênis legal</strong>
        <span>R$129.90</span>

        <button>
          <div>
            <MdAddShoppingCart size={16} color="#fff" />3
          </div>
          <span>ADICIONAR</span>
        </button>
      </li>

      <li>
        <img
          src="https://imgcentauro-a.akamaihd.net/900x900/M02ZFU02/tenis-feminino-preto-torani-com-glitter-img.jpg"
          alt="tenis"
        />
        <strong>Tênis legal</strong>
        <span>R$129.90</span>

        <button>
          <div>
            <MdAddShoppingCart size={16} color="#fff" />3
          </div>
          <span>ADICIONAR</span>
        </button>
      </li>

      <li>
        <img
          src="https://imgcentauro-a.akamaihd.net/900x900/M02ZFU02/tenis-feminino-preto-torani-com-glitter-img.jpg"
          alt="tenis"
        />
        <strong>Tênis legal</strong>
        <span>R$129.90</span>

        <button>
          <div>
            <MdAddShoppingCart size={16} color="#fff" />3
          </div>
          <span>ADICIONAR</span>
        </button>
      </li>

      <li>
        <img
          src="https://imgcentauro-a.akamaihd.net/900x900/M02ZFU02/tenis-feminino-preto-torani-com-glitter-img.jpg"
          alt="tenis"
        />
        <strong>Tênis legal</strong>
        <span>R$129.90</span>

        <button>
          <div>
            <MdAddShoppingCart size={16} color="#fff" />3
          </div>
          <span>ADICIONAR</span>
        </button>
      </li>

      <li>
        <img
          src="https://imgcentauro-a.akamaihd.net/900x900/M02ZFU02/tenis-feminino-preto-torani-com-glitter-img.jpg"
          alt="tenis"
        />
        <strong>Tênis legal</strong>
        <span>R$129.90</span>

        <button>
          <div>
            <MdAddShoppingCart size={16} color="#fff" />3
          </div>
          <span>ADICIONAR</span>
        </button>
      </li>
    </ProductList>
  );
}

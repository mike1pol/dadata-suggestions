'use strict';

/**
 * Dadata API class
 */
class Dadata {
  /**
   * API constructor
   * @param {string} apiKey Ключ dadata.ru
   */
  constructor(apiKey) {
    this.apiKey = apiKey;
  }

  /**
   * Возращает путь для запроса в DadataApi в зависимости от параметра.
   *
   * @param api
   * @returns {string}
   * @private
   */
  _path(api) {
    return `https://suggestions.dadata.ru/suggestions/api/4_1/rs/suggest/${api}`;
  }

  /**
   * Возвращает заголовок для запроса.
   *
   * @returns {{Authorization: string, Accept: string, "Content-Type": string}}
   * @private
   */
  _headers() {
    return {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
      'Authorization': `Token ${this.apiKey}`
    };
  }

  /**
   * Клиент
   *
   * @private
   * @param {string} api Название метода
   * @param {params} params Параметры
   * @returns {promise}
   */
  _client(api, params) {
    let request = Object.assign({
      count: 10
    }, params);
    let options = {
      method: 'POST',
      headers: this._headers(),
      body: JSON.stringify(request)
    };
    return fetch(this._path(api), options);
  }

  /**
   * Подсказки по ФИО
   *
   * @see {@link https://confluence.hflabs.ru/pages/viewpage.action?pageId=502038691|Документация}
   *
   * @param {object} params Параметры
   * @param {string} params.query Запрос
   * @param {number} [params.count=10] Кол-во возвращаемых результатов
   * @param {string[]} [params.parts=null] Подсказки по части ФИО (NAME,
   *     SURNAME, PATRONYMIC)
   * @param {string} [params.gender=UNKNOWN] Пол
   * @return {promise<object[]>}
   */
  fio(params) {
    return this._client('fio', params)
  }

  /**
   * Подсказки по адресу
   *
   * @see {@link https://confluence.hflabs.ru/pages/viewpage.action?pageId=502038680|Документация}
   * @param {object} params Параметры
   * @param {string} params.query Запрос
   * @param {number} [params.count=10] Кол-во возвращаемых результатов
   * @param {object} [params.locations=] Ограничение поиска адреса
   * @param {number} params.location.region_fias_id Ограничение по ФИАС коду
   *     региона
   * @param {number} params.location.area_fias_id Ограничение по ФИАС коду
   *     области
   * @param {number} params.location.city_fias_id Ограничение по ФИАС коду
   *     города
   * @param {number} params.location.settlement_fias_id Ограничение по ФИАС
   *     коду населенного пункта
   * @param {number} params.location.street_fias_id Ограничение по ФИАС коду
   *     улицы
   * @return {promise<object[]>}
   */
  address(params) {
    return this._client('address', params)
  }

  /**
   * Подсказки по организациям
   *
   * @see {@link https://confluence.hflabs.ru/pages/viewpage.action?pageId=502038697|Документация}
   *
   * @param {object} params Параметры
   * @param {string} params.query Запрос
   * @param {number} [params.count=10] Кол-во возвращаемых результатов
   * @param {string[]} [params.status=null] Фильтр по статусу организации
   *     (ACTIVE - активные, LIQUIDATING - ликвидируемые, LIQUIDATED -
   *     ликвидированные)
   * @param {string} [params.type=null] Фильтр по юридическим лицам (LEGAL) или
   *     индивидуальным предпринимателям (INDIVIDUAL)
   * @param {object[]} params.locations Фильтр по региону
   * @param {number} params.locations.kladr_id Двухзначный код региона по КЛАДР
   * @return {promise<object[]>}
   */
  party(params) {
    return this._client('party', params)
  }

  /**
   * Подсказки по банкам
   *
   * @see {@link https://confluence.hflabs.ru/pages/viewpage.action?pageId=502038711|Документация}
   *
   * @param {object} params Параметры
   * @param {string} params.query Запрос
   * @param {number} [params.count=10] Кол-во возвращаемых результатов
   * @param {string[]} [params.status=null] Фильтр по статусу (ACTIVE -
   *     активные, LIQUIDATING - ликвидируемые, LIQUIDATED - ликвидированные)
   * @param {string} [params.type=null] Фильтр по типу банковской организации
   *     BANK - банк, NKO - небанковская кредитная организация, BANK_BRANCH -
   *     филиал банка, NKO_BRANCH - филиал небанковской кредитной организации,
   *     RKC - РКЦ / ГРКЦ, OTHER - другое
   * @return {promise<object[]>}
   */
  bank(params) {
    return this._client('bank', params)
  }

  /**
   * Подсказки по email
   *
   * @see {@link https://confluence.hflabs.ru/pages/viewpage.action?pageId=502038705|Документация}
   *
   * @param {object} params Параметры
   * @param {string} params.query Запрос
   * @param {number} [params.count=10] Кол-во возвращаемых результатов
   * @return {promise<object[]>}
   */
  email(params) {
    return this._client('email', params)
  }
}

export default Dadata;

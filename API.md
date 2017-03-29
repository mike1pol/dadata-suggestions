<a name="Dadata"></a>

## Dadata
Dadata API class

**Kind**: global class  

* [Dadata](#Dadata)
    * [new Dadata(apiKey)](#new_Dadata_new)
    * [.fio(params)](#Dadata+fio) ⇒ <code>promise.&lt;Array.&lt;object&gt;&gt;</code>
    * [.address(params)](#Dadata+address) ⇒ <code>promise.&lt;Array.&lt;object&gt;&gt;</code>
    * [.party(params)](#Dadata+party) ⇒ <code>promise.&lt;Array.&lt;object&gt;&gt;</code>
    * [.bank(params)](#Dadata+bank) ⇒ <code>promise.&lt;Array.&lt;object&gt;&gt;</code>
    * [.email(params)](#Dadata+email) ⇒ <code>promise.&lt;Array.&lt;object&gt;&gt;</code>

<a name="new_Dadata_new"></a>

### new Dadata(apiKey)
API constructor


| Param | Type | Description |
| --- | --- | --- |
| apiKey | <code>string</code> | Ключ dadata.ru |

<a name="Dadata+fio"></a>

### dadata.fio(params) ⇒ <code>promise.&lt;Array.&lt;object&gt;&gt;</code>
Подсказки по ФИО

**Kind**: instance method of <code>[Dadata](#Dadata)</code>  
**See**: [Документация](https://confluence.hflabs.ru/pages/viewpage.action?pageId=502038691)  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| params | <code>object</code> |  | Параметры |
| params.query | <code>string</code> |  | Запрос |
| [params.count] | <code>number</code> | <code>10</code> | Кол-во возвращаемых результатов |
| [params.parts] | <code>Array.&lt;string&gt;</code> | <code></code> | Подсказки по части ФИО (NAME, SURNAME, PATRONYMIC) |
| [params.gender] | <code>string</code> | <code>&quot;UNKNOWN&quot;</code> | Пол |

<a name="Dadata+address"></a>

### dadata.address(params) ⇒ <code>promise.&lt;Array.&lt;object&gt;&gt;</code>
Подсказки по адресу

**Kind**: instance method of <code>[Dadata](#Dadata)</code>  
**See**: [Документация](https://confluence.hflabs.ru/pages/viewpage.action?pageId=502038680)  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| params | <code>object</code> |  | Параметры |
| params.query | <code>string</code> |  | Запрос |
| [params.count] | <code>number</code> | <code>10</code> | Кол-во возвращаемых результатов |
| [params.locations=] | <code>object</code> |  | Ограничение поиска адреса |
| params.location.region_fias_id | <code>number</code> |  | Ограничение по ФИАС коду региона |
| params.location.area_fias_id | <code>number</code> |  | Ограничение по ФИАС коду области |
| params.location.city_fias_id | <code>number</code> |  | Ограничение по ФИАС коду города |
| params.location.settlement_fias_id | <code>number</code> |  | Ограничение по ФИАС коду населенного пункта |
| params.location.street_fias_id | <code>number</code> |  | Ограничение по ФИАС коду улицы |

<a name="Dadata+party"></a>

### dadata.party(params) ⇒ <code>promise.&lt;Array.&lt;object&gt;&gt;</code>
Подсказки по организациям

**Kind**: instance method of <code>[Dadata](#Dadata)</code>  
**See**: [Документация](https://confluence.hflabs.ru/pages/viewpage.action?pageId=502038697)  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| params | <code>object</code> |  | Параметры |
| params.query | <code>string</code> |  | Запрос |
| [params.count] | <code>number</code> | <code>10</code> | Кол-во возвращаемых результатов |
| [params.status] | <code>Array.&lt;string&gt;</code> | <code></code> | Фильтр по статусу организации (ACTIVE - активные, LIQUIDATING - ликвидируемые, LIQUIDATED - ликвидированные) |
| [params.type] | <code>string</code> | <code>null</code> | Фильтр по юридическим лицам (LEGAL) или индивидуальным предпринимателям (INDIVIDUAL) |
| params.locations | <code>Array.&lt;object&gt;</code> |  | Фильтр по региону |
| params.locations.kladr_id | <code>number</code> |  | Двухзначный код региона по КЛАДР |

<a name="Dadata+bank"></a>

### dadata.bank(params) ⇒ <code>promise.&lt;Array.&lt;object&gt;&gt;</code>
Подсказки по банкам

**Kind**: instance method of <code>[Dadata](#Dadata)</code>  
**See**: [Документация](https://confluence.hflabs.ru/pages/viewpage.action?pageId=502038711)  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| params | <code>object</code> |  | Параметры |
| params.query | <code>string</code> |  | Запрос |
| [params.count] | <code>number</code> | <code>10</code> | Кол-во возвращаемых результатов |
| [params.status] | <code>Array.&lt;string&gt;</code> | <code></code> | Фильтр по статусу (ACTIVE - активные, LIQUIDATING - ликвидируемые, LIQUIDATED - ликвидированные) |
| [params.type] | <code>string</code> | <code>null</code> | Фильтр по типу банковской организации BANK - банк, NKO - небанковская кредитная организация, BANK_BRANCH - филиал банка, NKO_BRANCH - филиал небанковской кредитной организации, RKC - РКЦ / ГРКЦ, OTHER - другое |

<a name="Dadata+email"></a>

### dadata.email(params) ⇒ <code>promise.&lt;Array.&lt;object&gt;&gt;</code>
Подсказки по email

**Kind**: instance method of <code>[Dadata](#Dadata)</code>  
**See**: [Документация](https://confluence.hflabs.ru/pages/viewpage.action?pageId=502038705)  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| params | <code>object</code> |  | Параметры |
| params.query | <code>string</code> |  | Запрос |
| [params.count] | <code>number</code> | <code>10</code> | Кол-во возвращаемых результатов |


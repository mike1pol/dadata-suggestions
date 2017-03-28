<a name="Dadata"></a>

## Dadata
Dadata API class

**Kind**: global class  

* [Dadata](#Dadata)
    * [new Dadata(apiKey)](#new_Dadata_new)
    * [.fio(query, [count])](#Dadata+fio) ⇒ <code>Promise</code>
    * [.address(query, [count])](#Dadata+address) ⇒ <code>Promise</code>
    * [.party(query, [count])](#Dadata+party) ⇒ <code>Promise</code>
    * [.bank(query, [count])](#Dadata+bank) ⇒ <code>Promise</code>
    * [.email(query, [count])](#Dadata+email) ⇒ <code>Promise</code>

<a name="new_Dadata_new"></a>

### new Dadata(apiKey)
API constructor


| Param | Type | Description |
| --- | --- | --- |
| apiKey | <code>string</code> | Dadata api key |

<a name="Dadata+fio"></a>

### dadata.fio(query, [count]) ⇒ <code>Promise</code>
Search FIO

**Kind**: instance method of <code>[Dadata](#Dadata)</code>  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| query | <code>string</code> |  | FIO query |
| [count] | <code>number</code> | <code>10</code> | Count of results |

<a name="Dadata+address"></a>

### dadata.address(query, [count]) ⇒ <code>Promise</code>
Search address

**Kind**: instance method of <code>[Dadata](#Dadata)</code>  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| query | <code>string</code> |  | Address query |
| [count] | <code>number</code> | <code>10</code> | Count of results |

<a name="Dadata+party"></a>

### dadata.party(query, [count]) ⇒ <code>Promise</code>
Search organisations

**Kind**: instance method of <code>[Dadata](#Dadata)</code>  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| query | <code>string</code> |  | Organisations query |
| [count] | <code>number</code> | <code>10</code> | Count of results |

<a name="Dadata+bank"></a>

### dadata.bank(query, [count]) ⇒ <code>Promise</code>
Search bank

**Kind**: instance method of <code>[Dadata](#Dadata)</code>  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| query | <code>string</code> |  | Bank query |
| [count] | <code>number</code> | <code>10</code> | Count of results |

<a name="Dadata+email"></a>

### dadata.email(query, [count]) ⇒ <code>Promise</code>
Search email

**Kind**: instance method of <code>[Dadata](#Dadata)</code>  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| query | <code>string</code> |  | Email query |
| [count] | <code>number</code> | <code>10</code> | Count of results |


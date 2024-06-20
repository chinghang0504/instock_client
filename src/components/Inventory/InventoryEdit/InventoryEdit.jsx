import './InventoryEdit.scss';
import React, { useState, useEffect } from 'react';
import ArrowBack from '../../../assets/icons/arrow_back-24px.svg';

function InventoryEdit() {
  return (
    <section className="inventory-edit">
      <section className="inventory-edit__container">
      <section className="inventory-edit__heading-section">
        <img src={ArrowBack} alt="back Arrow sign" className="inventory-edit__back-arrow" />
        <h1 className="inventory-edit__heading">
          Edit Inventory Item
        </h1>
      </section>

      <section className="inventory-edit__main-container">

        <div className="inventory-edit__detail-container">
          <h2 className="inventory-edit__detail-heading">
            Item Details
          </h2>
          <form action="" className="inventory-edit__form">
            <div className="inventory-edit__item-name">
              <label htmlFor="title" className="inventory-edit__label">
               Item Name
              </label>
              <input className="inventory-edit__text"
              type="text"
              id='TV'
              name='name'
              placeholder=''
              required/>
            </div>

            <div className="inventory-edit__description">
              <label htmlFor="title" className="inventory-edit__label">
               Description
              </label>
              <textarea className="inventory-edit__text-box"
              name="description" 
              id="description"
              cols="30"
              rows="7"
              placeholder=''
              required>
              </textarea>
            </div>

            <div className="inventory-edit__category">
            <label htmlFor="title" className="inventory-edit__label">
              Category
            </label>
            <select className="inventory-edit__text"
            name="category" 
            id="category"
            >
              <option value=""></option>
            </select>
            </div>
          </form>
        </div>


        <div className="inventory-edit__availability-container">
          <h2 className="inventory-edit__availability-heading">
            Item Availability
          </h2>

          <div className="inventory-edit__status">
            <label htmlFor="title" className="inventory-edit__label">
              Status
            </label>

            <div className="inventory-edit__radio-section">

              <div className="inventory-edit__radio-list">
                <input className="inventory-edit__radio-item"
                type="radio"
                name="options"
                />In Stock
              </div>

              <div className="inventory-edit__radio-list">
               <input className="inventory-edit__radio-item"
               type="radio"
               name="options"
               />Out of Stock
              </div>

            </div>

          </div>

          <div className="inventory-edit__quantity">
            <label htmlFor="title" className="inventory-edit__label">
               Quantity
            </label>
            <select className="inventory-edit__text"
              name="quantity" 
              id="quantity"
            >
               <option value=""></option>
            </select>
          </div>

          <div className="inventory-edit__warehouse">
            <label htmlFor="title" className="inventory-edit__label">
              Warehouse
            </label>
            <select className="inventory-edit__text"
            name="warehouse" 
            id="warehouse"
            >
              <option value=""></option>
            </select>
          </div>
        </div>
        <div className="inventory-edit__button-section">
          <button type="submit" className="inventory-edit__button-cancel inventory-edit--button">Cancel</button>
          <button type="submit" className="inventory-edit__button-save inventory-edit--button">Save</button>
        </div>
        </section>
      </section>
    </section>
  )
}

export default InventoryEdit

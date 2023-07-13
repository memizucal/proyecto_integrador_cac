//ItemQueries:
module.exports = queries = {
	getAllItems: "SELECT * FROM item;",
	getOneItem: "SELECT * FROM item WHERE item_Id = @item_Id;",
	create:"INSERT INTO item (item_id, category_id, licence_id, name, description, sku, price, stock, discount, dues, image, active) values (@category_Id, @licence_id, @name, @description, @sku, @price, @stock, @discount, @dues, @image, @active);",
}


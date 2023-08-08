//ItemQueries:
module.exports = queries = {
	getAllItems: "SELECT * FROM item WHERE active = 1;",
	getOneItem: "SELECT * FROM item WHERE item_id = @item_Id;",
	createOneItem:"INSERT INTO item (category_id, licence_id, name, description, sku, price, stock, discount, dues, image, active) values (@category_Id, @licence_id, @name, @description, @sku, @price, @stock, @discount, @dues, @image, @active);",
	updateOneItem: "UPDATE item SET (value, @value) WHERE item_id = @item_Id",
	deleteOneItem: "UPDATE item SET active = 0 WHERE item_id = @item_id;"
}


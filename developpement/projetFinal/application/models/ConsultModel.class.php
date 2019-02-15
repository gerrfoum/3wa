<?php

class ConsultModel {

		public function showEvent() {
        $database = new Database();

        $sql = 'SELECT * FROM Events';

        return $database->query($sql);
    }

		public function showPartners() {
        $database = new Database();

        $sql = 'SELECT * FROM Partner';

        return $database->query($sql);
    }


}








?>